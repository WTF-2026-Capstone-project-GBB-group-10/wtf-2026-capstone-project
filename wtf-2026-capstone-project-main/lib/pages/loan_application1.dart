import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:linear_progress_bar/linear_progress_bar.dart';
import 'package:project_ggb/widgets/custom_button.dart';
import 'package:project_ggb/widgets/custom_textfield.dart';

class LoanApplication1 extends StatefulWidget {
  const LoanApplication1({super.key});

  @override
  State<LoanApplication1> createState() => _LoanApplication1State();
}

class _LoanApplication1State extends State<LoanApplication1> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed("/home");
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
            
                Text("Step 1 of 4"),
                
                TitledProgressBar(
                  maxSteps: 4,
                  currentStep: 1,
                  progressColor: Color(0xFF006400),
                  backgroundColor: Colors.grey.shade300,
                  labelType: LabelType.percentage,
                  labelColor: Colors.white,
                  labelFontWeight: FontWeight.bold,
                  minHeight: 12,
                  borderRadius: BorderRadius.circular(12),
                ),
            
                SizedBox(height: 8,),
            
                Text("Loan Amount",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 8),
                  CustomTextfield(label: "Enter Loan Amount" ),
                  SizedBox(height: 8,),
                  Text("Crop Type",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 8),
                  CustomTextfield(label: "Enter Crop Type" ),
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
                  Text("Loan Purpose",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 8),
                  CustomTextfield(label: "Enter Loan Purpose"),
            
                  SizedBox(height: 50),
            
                  CustomButton(text: "Next", onPressed: (){
                    Navigator.of(context).pushReplacementNamed("/loan_app2");
                  },)
              ],
            ),
          ),
        ),
      );
  }
}
