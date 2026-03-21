import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:linear_progress_bar/linear_progress_bar.dart';
import 'package:project_ggb/widgets/custom_button.dart';
import 'package:project_ggb/widgets/custom_textfield.dart';

class LoanApplication2 extends StatefulWidget {
  const LoanApplication2({super.key});

  @override
  State<LoanApplication2> createState() => _LoanApplication2State();
}

class _LoanApplication2State extends State<LoanApplication2> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed("/loan_app1");
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
                Center(
                  child: Text("Loan Application",
                  style: GoogleFonts.poppins(
                    fontSize: 21,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                ),
                SizedBox(height:30),
            
                Text("Step 2 of 4"),
                
                TitledProgressBar(
                  maxSteps: 4,
                  currentStep: 2,
                  progressColor: Color(0xFF006400),
                  backgroundColor: Colors.grey.shade300,
                  labelType: LabelType.percentage,
                  labelColor: Colors.white,
                  labelFontWeight: FontWeight.bold,
                  minHeight: 12,
                  borderRadius: BorderRadius.circular(12),
                ),
            
                SizedBox(height: 8,),
            
                Text("Estimated Yield",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 8),
                  CustomTextfield(label: "Enter Yield Amount" ),
                  SizedBox(height: 8,),
                  Text("Estimated Income",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 8),
                  CustomTextfield(label: "Enter Estimated Income" ),
                  SizedBox(height: 8,),
            
                  Text("Farm Size",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 8,),
                  CustomTextfield(label: "Enter Farm Size"),
                  SizedBox(height: 8),
                  Text("Transaction History Upload",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),

                  ElevatedButton.icon(onPressed: (){}, 
              label: Text ("Select File"),
              icon: Icon(Icons.upload_file),
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF006400),
                foregroundColor: Colors.white
              )
              ),
              SizedBox(height: 15),

              Text("Or",),

              SizedBox(height: 10),

               Text(
                "Take a Photo of your ID",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),

               SizedBox(height: 8),

              ElevatedButton.icon(onPressed: (){},
              icon: Icon(Icons.camera_alt),
               label: const Text("Open Camera & Take Photo"),
               style: ElevatedButton.styleFrom(
                backgroundColor: Colors.lightGreen,
                foregroundColor: Color(0xFF006400)
               ),
               ),
                  
                  SizedBox(height: 30),
            
                  CustomButton(text: "Next", onPressed: (){
                    Navigator.of(context).pushReplacementNamed("/loan_app3");
                  },)
              ],
            ),
          ),
        ),
    ) ;
  }
}