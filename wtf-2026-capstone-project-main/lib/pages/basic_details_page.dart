import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';
import 'package:project_ggb/widgets/custom_textfield.dart';

class BasicDetailsPage extends StatefulWidget {
  const BasicDetailsPage({super.key});

  @override
  State<BasicDetailsPage> createState() => _BasicDetailsPageState();
}

String? selectedGender;
String? selectedCountry;
final List <String> genderOptions = [
   "Male", "Female"
];

final List<String> countryOptions = [
  "Algeria",
   "Angola",
   "Benin",
   "Botswana",
   "Burkina Faso",
  "Burundi",
   "Cabo Verde",
   "Cameroon",
   "Central African Republic",
   "Chad",
   "Comoros",
   "Congo",
   "Democratic Republic of the Congo",
   "Djibouti",
   "Egypt",
   "Equatorial Guinea",
   "Eritrea",
  "Eswatini",
   "Ethiopia",
   "Gabon",
  "Gambia",
  "Ghana",
   "Guinea",
   "Guinea-Bissau",
   "Ivory Coast",
   "Kenya",
  "Lesotho",
   "Liberia",
   "Libya",
   "Madagascar",
  "Malawi",
   "Mali",
   "Mauritania",
   "Mauritius",
   "Morocco",
   "Mozambique",
   "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
   "São Tomé and Príncipe",
   "Senegal",
   "Seychelles",
  "Sierra Leone",
   "Somalia",
   "South Africa",
   "South Sudan",
  "Sudan",
  "Tanzania",
   "Togo",
   "Tunisia",
   "Uganda",
  "Zambia",
   "Zimbabwe"
];

String? selectedRole; 
bool consentGiven = false;

class _BasicDetailsPageState extends State<BasicDetailsPage> {
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
        //elevation: 0.01,
      ),

      body: Padding(
        padding: EdgeInsetsGeometry.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Enter Basic Details Here",
                style: GoogleFonts.poppins(
                  fontSize: 21,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              SizedBox(height: 8),
              Text(
                "Fill the details below",
                style: TextStyle(color: Colors.grey, fontSize: 14),
              ),
              SizedBox(height: 15),
              Text(
                "First Name",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
               SizedBox(height: 8),

               CustomTextfield(label: "Enter First Name"),

               SizedBox(height: 8),

               Text(
                "Last Name",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
               SizedBox(height: 8), 

               CustomTextfield(label: "Enter Last Name"),

               SizedBox(height: 8),
               Text(
                "Gender",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
               SizedBox(height: 8),

               DropdownButtonFormField <String>(
                
                items: genderOptions.map((genderOptions) {
                  return DropdownMenuItem(
                    value: genderOptions,
                    child: Text(genderOptions),
                  );
                }).toList(),
                onChanged: (value){
                  setState(() {
                    selectedGender = value;
                  });
                },
                decoration: const InputDecoration( labelText: "Select Gender", border: OutlineInputBorder(), ),
                ),

                
               SizedBox(height: 8),
               Text(
                "Country",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
               SizedBox(height: 8),

               DropdownButtonFormField <String>(
                
                items: countryOptions.map((countryOptions) {
                  return DropdownMenuItem(
                    value: countryOptions,
                    child: Text(countryOptions),
                  );
                }).toList(),
                onChanged: (value){
                  setState(() {
                    selectedCountry = value;
                  });
                },
                decoration: const InputDecoration( labelText: "Select Country", border: OutlineInputBorder(), ),
                ),

               SizedBox(height: 8),

               Text(
                "City",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
               SizedBox(height: 8),

               CustomTextfield(label: "Enter City"),

               SizedBox(height: 8),

               Text(
                "Role",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
               SizedBox(height: 8),

               CustomTextfield(label: "Select Role"),

               SizedBox(height: 8),

               Text(
                "Upload ID",
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),

              SizedBox(height: 8),

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
                backgroundColor: Colors.greenAccent,
                foregroundColor: Color(0xFF006400)
               ),
               ),

               SizedBox(height: 30),

               Row(
                children: [
                  Checkbox(value: consentGiven, 
                  onChanged: (value){
                    setState(() {
                      consentGiven = value?? false;
                    });
                  }
                  ),
                  Text("Consent for data use")
                ],
               ),
               SizedBox(height: 10),

               CustomButton(text: "Create Account", onPressed: () {
               // print("Role: $selectedRole"); 
               // print("Consent: $consentGiven");
                Navigator.of(context).pushReplacementNamed("/sucess");
                ;
               })
            ],
          ),
        ),
      ),
    );
  }
}
