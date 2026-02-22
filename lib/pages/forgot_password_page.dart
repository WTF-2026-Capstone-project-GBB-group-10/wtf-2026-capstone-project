import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';
import 'package:project_ggb/widgets/custom_textfield.dart';

class ForgotPasswordPage extends StatefulWidget {
  const ForgotPasswordPage({super.key});

  @override
  State<ForgotPasswordPage> createState() => _ForgotPasswordPageState();
}

class _ForgotPasswordPageState extends State<ForgotPasswordPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(

      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed("/login");
          },
        ),
       // backgroundColor: Colors.white,
        //elevation: 0,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 100,),
              Text("Forgot Password",
              style: GoogleFonts.poppins(
                        fontSize: 21,
                        fontWeight: FontWeight.bold,
                        color: Colors.black
                      ),
              ),
              SizedBox(height: 8),
              Text("Please enter your email to reset the password",
              style: TextStyle(color: Colors.grey,
              fontSize: 16),),
        
              SizedBox(height: 30),
        
              Text("Your Email",
        
              style: GoogleFonts.poppins(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.black
                      ),
              ),
              
              SizedBox(height: 8),
        
              CustomTextfield(label: "Enter your Email"),
        
              SizedBox(height: 20),
        
              CustomButton(text: "Reset Password", onPressed: (){
                Navigator.of(context).pushReplacementNamed("/set");
              })
            ],
          ),
        ),
      ),
    );
  }
}