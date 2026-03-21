import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';
import 'package:project_ggb/widgets/password_textfield.dart';

class EnterPasswordPage extends StatefulWidget {
  const EnterPasswordPage({super.key});

  @override
  State<EnterPasswordPage> createState() => _EnterPasswordPageState();
}

class _EnterPasswordPageState extends State<EnterPasswordPage> {

  
  TextEditingController passwordController = TextEditingController();

  @override
  void dispose() {
    passwordController.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed("/otp");
          },
        ),
        //backgroundColor: Colors.white,
        //elevation: 0,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 100,),
              Text(
                "Enter Password",
                style: GoogleFonts.poppins(
                  fontSize: 21,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
        
              SizedBox(height: 8),
              Text(
                "Create a new password.",
                style: TextStyle(color: Colors.grey, fontSize: 14),
              ),

              SizedBox(height: 15),

              Text(
                "Password",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              PasswordTextfield(label: "Enter your password",
              textEditingController: passwordController),
        
              SizedBox(height: 8),
        
              Text(
                "Confirm Password",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 8),
              PasswordTextfield(label: "Confirm your password",
              textEditingController: passwordController),

              SizedBox(height: 100),
        
              CustomButton(text: "Continue", onPressed: () {
                Navigator.of(context).pushReplacementNamed("/basicDetails");
              }),
            ],
          ),
        ),
      ),
    );
  }
}