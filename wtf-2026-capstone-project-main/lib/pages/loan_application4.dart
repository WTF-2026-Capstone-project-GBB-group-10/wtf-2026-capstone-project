import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';

class LoanApplication4 extends StatefulWidget {
  const LoanApplication4({super.key});

  @override
  State<LoanApplication4> createState() => _LoanApplication4State();
}

class _LoanApplication4State extends State<LoanApplication4> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed("/loan_app3");
          },
        ),
        //backgroundColor: Colors.white,
        //elevation: 0,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(height: 150),
              Icon(Icons.check_circle, color: Colors.lightGreen, size: 100),
             SizedBox(height: 25),
        
             Text("Successful",
             style: GoogleFonts.poppins(
                    fontSize: 21,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
             ),
        
             SizedBox(height: 40),
        
             Text("Congratulations! You have successfully requested for a loan",
             style: TextStyle(color: Colors.grey, fontSize: 14)
             ),
        
             SizedBox(height: 40),
        
             CustomButton(text: "Continue", onPressed: (){
              Navigator.of(context).pushReplacementNamed("/home");
             })
            ],
          ),
        ),
      ),
    );
  }
}