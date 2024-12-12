# Importing required functions 
import os
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt 
from flask import Flask, render_template , request
import csv


# Flask constructor 
app = Flask(__name__) 

# Generate a scatter plot and returns the figure 
def get_plot():
	df = pd.read_csv('poblacion.csv')
	plt.plot('Date', 'COL', data=df) #datos para Colombia, cambiar por otro pais del csv
	plt.plot('Date', 'AFG', data=df) #datos para Afganistan, cambiar por otro pais del csv
	plt.plot('Date', 'ARG', data=df)
	plt.plot('Date', 'IRQ', data=df)
	plt.plot('Date', 'IRL', data=df)
	plt.legend(["Colombia","Afganistan","Argenitna","Irak","Irlanda"],loc="upper right")
	plt.xlabel('X label]')
	plt.ylabel('Y label')
	return plt 

# Root URL 
@app.get('/') 
def single_converter(): 
	# Get the matplotlib plot 
	plot = get_plot() 

	# Save the figure in the static directory 
	plot.savefig(os.path.join('static', 'images', 'plot.png')) 

	return render_template('index.html') 

@app.route('/contactenos', methods=['GET', 'POST']) 
def pag_contacto():
	pregunta=""
	if request.method == 'POST':
		pregunta = request.form.get('pregunta')
		with open("salida.csv", "a", newline="") as archivo:
			escritor = csv.writer(archivo)
			escritor.writerow(["pregunta", pregunta])

	# Get the matplotlib plot 
	return render_template('contactenos.html') 

# Main Driver Function 
if __name__ == '__main__': 
	# Run the application on the local development server 
	app.run(debug=True) 