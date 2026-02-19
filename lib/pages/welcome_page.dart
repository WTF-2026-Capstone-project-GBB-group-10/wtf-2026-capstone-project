import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';

class WelcomePage extends StatefulWidget {
  const WelcomePage({super.key});

  @override
  State<WelcomePage> createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 50),
              Text("Welcome",
              style: TextStyle(
                fontSize: 60,
                fontWeight: FontWeight.bold,
                color: Color(0xFF006400)
              )
              ),
          
              SizedBox(height: 30),
          
                Text("We're glad to have you at \nGreen Bloom Bank.",
                style: GoogleFonts.poppins(fontSize: 20,
                  color: Color(0xFF006400),
                  fontWeight: FontWeight.w500)),
          
                SizedBox(height: 40),
          
                Image.asset(
                  'assets/grain.png', 
                  height: 350,
                  fit: BoxFit.contain,
                ),
          
                SizedBox(height: 40),
          
                CustomButton(text: "Get Started", onPressed: () {
                  Navigator.of(context).pushReplacementNamed("/login");
                }
                )
            ],
          ),
        ),
      ),
    );
  }
}