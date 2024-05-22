import numpy as np
import pandas as pd

# Paramètres initiaux
n_employees = 10000
n_retirees = 1000
initial_reserve = 200
years = range(2023, 2034)

# Générer les données initiales des employés
ages_dict = [range(21, 31), range(31, 41), range(41, 53), range(53, 63)]
salaries_dict = [range(3000, 5001), range(5000, 7501), range(7500, 10001), range(10000, 15001), range(15000, 20001), range(20000, 30001), range(30000, 40001)]

np.random.seed(0)
ages = np.random.choice(range(4), size=n_employees, p=[0.2, 0.2, 0.3, 0.3])
ages = [ages_dict[i] for i in ages]
salaries = np.random.choice(range(7), size=n_employees, p=[0.2, 0.2, 0.2, 0.15, 0.1, 0.1, 0.05])
salaries = [salaries_dict[i] for i in salaries]
# Initialisation des employés et retraités
employees = pd.DataFrame({'Age': [np.random.choice(age) for age in ages], 
                          'Salary': [np.random.choice(salary) for salary in salaries]})
retirees = employees.sample(n_retirees)

# Fonction pour la mise à jour annuelle
def update_year(employees, retirees, year, retire_age):
    # Avancement salarial tous les 5 ans
    if year in [2025, 2030]: 
        employees['Salary'] *= 1.05 
    
    # Mise à jour des âges
    employees['Age'] += 1
    retirees['Age'] += 1
    
    # Retraite des employés atteignant l'âge de la retraite
    new_retirees = employees[employees['Age'] >= retire_age]
    retirees = pd.concat([retirees, new_retirees])
    employees = employees[employees['Age'] < retire_age]
    
    # Recrutement de nouveaux employés
    SIZE = np.random.randint(250, 401)
    new_recruits = pd.DataFrame({'Age': np.random.choice(range(21, 41), size=SIZE), 
                                 'Salary': np.random.choice(range(3000, 40001), size=SIZE)})
    employees = pd.concat([employees, new_recruits])
    
    # Calcul des indicateurs
    tot_emp = len(employees)
    tot_ret = len(retirees)
    tot_cotis = employees['Salary'].sum() * 0.07 / 1e6 # Exemple de taux moyen de cotisation
    tot_pens = retirees['Salary'].sum() * 0.8 / 1e6    # Exemple de taux de pension
    reserve = initial_reserve + tot_cotis - tot_pens
    nouv_ret = len(new_retirees)
    nouv_rec = len(new_recruits)
    
    return tot_emp, tot_ret, tot_cotis, tot_pens, reserve, nouv_ret, nouv_rec

# Simulation annuelle pour un scénario
results = []
for year in years:
    result = update_year(employees, retirees, year, retire_age=65)
    results.append(result)

# Convertir les résultats en DataFrame
results_df = pd.DataFrame(results, columns=['TotEmp', 'TotRet', 'TotCotis', 'TotPens', 'Reserve', 'NouvRet', 'NouvRec'])
print(results_df)
