package com.example.helloworld


import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import android.widget.TextView


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val editNome = findViewById<EditText>(R.id.editText)
        val textMessage = findViewById<TextView>(R.id.textView)
        val btnOk = findViewById<ImageButton>(R.id.Button)

        btnOk.setOnClickListener {
            if(!editNome.text.isEmpty()){
                textMessage.setText("Olá " +editNome.text.trim() + ", seja bem vindo ao mundo mobile")
            }
            else{
                textMessage.setText("Por favor, informe seu nome")
            }
        }



    }
}