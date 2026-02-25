import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:linear_progress_bar/linear_progress_bar.dart';
import 'package:project_ggb/widgets/custom_button.dart';

class LoanApplication3 extends StatefulWidget {
  const LoanApplication3({super.key});

  @override
  State<LoanApplication3> createState() => _LoanApplication3State();
}

class _LoanApplication3State extends State<LoanApplication3> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed("/loan_app2");
          },
        ),
        //backgroundColor: Colors.white,
        //elevation: 0,
      ),
      body: Padding(padding: EdgeInsetsGeometry.all(8.0),
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
            
                Text("Step 3 of 4"),
                
                TitledProgressBar(
                  maxSteps: 4,
                  currentStep: 3,
                  progressColor: Color(0xFF006400),
                  backgroundColor: Colors.grey.shade300,
                  labelType: LabelType.percentage,
                  labelColor: Colors.white,
                  labelFontWeight: FontWeight.bold,
                  minHeight: 12,
                  borderRadius: BorderRadius.circular(12),
                ),
            
                SizedBox(height: 20),

                Text("Upload Farm photos (max 4)",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 16),

                  Container(
                     width: MediaQuery.of(context).size.width * 1.3,
            height: 150,
            margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
             padding: const EdgeInsets.all(16),
             decoration: BoxDecoration( color: Colors.white,
              borderRadius: BorderRadius.circular(12), 
              boxShadow: [ BoxShadow( color: Colors.black12, blurRadius: 6, offset: Offset(0, 3), ), ], ),
                       child: Column(
                        children: [
                          SizedBox(height: 8,),
                          ElevatedButton.icon(
                            onPressed: (){}, 
                            label: Icon(Icons.upload_file),
                            ),
                            Text("Select File")
                        ],
                       ),
                  ),
                  SizedBox(height: 8,),

                  Center(child: Text("Or")),

                  SizedBox(height: 16),

                  Center(
                    child: ElevatedButton.icon(onPressed: (){},
                                  icon: Icon(Icons.camera_alt),
                                   label: const Text("Open Camera & Take Photo"),
                                   style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.greenAccent,
                                    foregroundColor: Color(0xFF006400)
                                   ),
                                   ),
                  ),

                  SizedBox(height: 16),

                  Text("Upload ID",
                  style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                  ),
                  SizedBox(height: 16),

                  Container(
                     width: MediaQuery.of(context).size.width * 1.3,
            height: 150,
            margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
             padding: const EdgeInsets.all(16),
             decoration: BoxDecoration( color: Colors.white,
              borderRadius: BorderRadius.circular(12), 
              boxShadow: [ BoxShadow( color: Colors.black12, blurRadius: 6, offset: Offset(0, 3), ), ], ),
                       child: Column(
                        children: [
                          SizedBox(height: 8,),
                          ElevatedButton.icon(
                            onPressed: (){}, 
                            label: Icon(Icons.upload_file),
                            ),
                            Text("Select File")
                        ],
                       ),
                  ),
                  SizedBox(height: 8,),

                  Center(child: Text("Or")),

                  SizedBox(height: 16),

                  Center(
                    child: ElevatedButton.icon(onPressed: (){},
                                  icon: Icon(Icons.camera_alt),
                                   label: const Text("Open Camera & Take Photo"),
                                   style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.greenAccent,
                                    foregroundColor: Color(0xFF006400)
                                   ),
                                   ),
                  ),

                  SizedBox(height: 40),

                  CustomButton(text: "Next", onPressed: (){
                    Navigator.of(context).pushReplacementNamed("/loan_app4");
                  },)

          ],
        ),
      ),
      ),
    );
  }
}