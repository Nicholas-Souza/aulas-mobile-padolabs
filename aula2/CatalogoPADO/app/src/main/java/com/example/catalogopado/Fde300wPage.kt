package com.example.catalogopado

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class Fde300wPage : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fde300w_page)

        val btn = findViewById<Button>(R.id.btnComprar)

        btn.setOnClickListener {
            val toast = Toast.makeText(this,
                "Ainda não implementado",
                Toast.LENGTH_SHORT)

            toast.show()
        }
    }
}