package com.example.catalogopado

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.cardview.widget.CardView
import com.google.android.material.appbar.MaterialToolbar

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val mainToolbar = findViewById<MaterialToolbar>(R.id.mainToolBar)
        mainToolbar.setNavigationOnClickListener{
            Toast.makeText(this,"Hamburguer pressionado!!!" , Toast.LENGTH_SHORT)
                .show()
        }
        mainToolbar.setOnMenuItemClickListener { menuItem ->
            when (menuItem.itemId) {
                R.id.menu_item_notifications -> {
                    Toast.makeText(this,
                        "Ir para a página de notiicações!!!",
                    Toast.LENGTH_SHORT
                    ) .show()
                    true
                }

                R.id.menu_item_cart -> {
                    Toast.makeText(
                        this,
                        "Ir para a página do carrinho!!!",
                        Toast.LENGTH_SHORT
                        ).show()
                    true
                }
                else -> false
            }
        }

        val fde600wcard = findViewById<CardView>(R.id.fde600wCard)
        fde600wcard.setOnClickListener {
            startActivity(Intent(this,Fde600wPage::class.java))
        }
        val fde300wcard = findViewById<CardView>(R.id.fde300wCard)
        fde300wcard.setOnClickListener {
            startActivity(Intent(this,Fde300wPage::class.java))
        }

    }
}