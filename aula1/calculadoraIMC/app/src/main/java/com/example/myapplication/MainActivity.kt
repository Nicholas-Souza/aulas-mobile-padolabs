package com.example.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import kotlin.math.roundToInt

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val editAltura = findViewById<EditText>(R.id.informaAltura)
        val editPeso = findViewById<EditText>(R.id.informaPeso)
        val btnOk = findViewById<Button>(R.id.button)
        val resultado = findViewById<TextView>(R.id.resultado)



        btnOk.setOnClickListener {
            val peso = editPeso.text.toString()
            val altura = editAltura.text.toString()

            val conta = peso.toDouble()/(altura.toDouble()*altura.toDouble())
            val formataImc = (conta * 1000.0).roundToInt()/1000.0
            resultado.setText("IMC: " + formataImc)

            if(!editAltura.text.isEmpty() || !editPeso.text.isEmpty()){
                resultado.setText("Sua IMC é de " + formataImc )
            }
            else{
                resultado.setText("Por favor insira todos os dados")
            }

        }
    }
}