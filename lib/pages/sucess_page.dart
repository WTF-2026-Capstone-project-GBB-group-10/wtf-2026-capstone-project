import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';

class SucessPage extends StatefulWidget {
  const SucessPage({super.key});

  @override
  State<SucessPage> createState() => _SucessPageState();
}

class _SucessPageState extends State<SucessPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
        
             Text("Congratulations! You have successfully created your Green Bloom Bank Account",
             style: TextStyle(color: Colors.grey, fontSize: 14)
             ),
        
             SizedBox(height: 40),
        
             CustomButton(text: "Continue", onPressed: (){})
            ],
          ),
        ),
      ),
    );
  }
}