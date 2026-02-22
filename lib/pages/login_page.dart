import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}
final List <Map<String, String>> africaCountryCodes = [
  {"code": "+213", "name": "Algeria"},
  {"code": "+244", "name": "Angola"},
  {"code": "+229", "name": "Benin"},
  {"code": "+267", "name": "Botswana"},
  {"code": "+226", "name": "Burkina Faso"},
  {"code": "+257", "name": "Burundi"},
  {"code": "+237", "name": "Cameroon"},
  {"code": "+238", "name": "Cape Verde"},
  {"code": "+236", "name": "Central African Republic"},
  {"code": "+235", "name": "Chad"},
  {"code": "+269", "name": "Comoros"},
  {"code": "+225", "name": "Ivory Coast"},
  {"code": "+243", "name": "Democratic Republic of the Congo"},
  {"code": "+242", "name": "Republic of the Congo"},
  {"code": "+253", "name": "Djibouti"},
  {"code": "+20", "name": "Egypt"},
  {"code": "+240", "name": "Equatorial Guinea"},
  {"code": "+291", "name": "Eritrea"},
  {"code": "+251", "name": "Ethiopia"},
  {"code": "+241", "name": "Gabon"},
  {"code": "+220", "name": "Gambia"},
  {"code": "+233", "name": "Ghana"},
  {"code": "+224", "name": "Guinea"},
  {"code": "+245", "name": "Guinea-Bissau"},
  {"code": "+254", "name": "Kenya"},
  {"code": "+266", "name": "Lesotho"},
  {"code": "+231", "name": "Liberia"},
  {"code": "+218", "name": "Libya"},
  {"code": "+261", "name": "Madagascar"},
  {"code": "+265", "name": "Malawi"},
  {"code": "+223", "name": "Mali"},
  {"code": "+222", "name": "Mauritania"},
  {"code": "+230", "name": "Mauritius"},
  {"code": "+212", "name": "Morocco"},
  {"code": "+258", "name": "Mozambique"},
  {"code": "+264", "name": "Namibia"},
  {"code": "+227", "name": "Niger"},
  {"code": "+234", "name": "Nigeria"},
  {"code": "+250", "name": "Rwanda"},
  {"code": "+239", "name": "São Tomé and Príncipe"},
  {"code": "+221", "name": "Senegal"},
  {"code": "+248", "name": "Seychelles"},
  {"code": "+232", "name": "Sierra Leone"},
  {"code": "+252", "name": "Somalia"},
  {"code": "+27", "name": "South Africa"},
  {"code": "+211", "name": "South Sudan"},
  {"code": "+249", "name": "Sudan"},
  {"code": "+268", "name": "Eswatini"},
  {"code": "+255", "name": "Tanzania"},
  {"code": "+228", "name": "Togo"},
  {"code": "+216", "name": "Tunisia"},
  {"code": "+256", "name": "Uganda"},
  {"code": "+260", "name": "Zambia"},
  {"code": "+263", "name": "Zimbabwe"}
];


String _selectedDialCode = '+234';

class _LoginPageState extends State<LoginPage> {
  bool _isPasswordVisible = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.only(top: 40),
            child: Image.asset(
              'assets/logo2.png',
              height: 80,
              fit: BoxFit.contain,
            ),
          ),
          Text(
            "Green Bloom Bank",
            style: TextStyle(
              fontSize: 25,
              fontWeight: FontWeight.bold,
              color: Colors.lightGreen,
            ),
          ),
          SizedBox(height: 30),
          Expanded(
            child: DefaultTabController(
              length: 2,
              child: Column(
                children: [
                  TabBar(
                    labelStyle: GoogleFonts.poppins(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                    unselectedLabelColor: Colors.grey,
                    labelColor: Color(0xFF006400),
                    indicatorColor: Color(0xFF006400),
                    indicatorSize: TabBarIndicatorSize.tab,
                    tabs: [
                      Tab(text: "Log in"),
                      Tab(text: "Sign up"),
                    ],
                  ),
                  Expanded(
                    child: TabBarView(
                      children: [
                        // Login Tab
                        SingleChildScrollView(
                          child: Padding(
                            padding: EdgeInsets.all(16.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(height: 30),
                                Text(
                                  "Phone Number",
                                  style: GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold
                                  ),
                                ),
                                SizedBox(height: 8),
                                Row(
                                  children: [
                                    Container(
                                      padding: EdgeInsets.symmetric(horizontal: 10),
                                      decoration: BoxDecoration(
                                        border: Border.all(color: Colors.grey),
                                        borderRadius: BorderRadius.circular(8),
                                      ),
                                      child: DropdownButton<String>(
                                        value: _selectedDialCode,
                                        underline: SizedBox.shrink(),
                                        items: africaCountryCodes.map((country) {
                                          return DropdownMenuItem(
                                            value: country['code'],
                                            child: Text(country['code']!),
                                          );
                                        }).toList(),
                                        onChanged: (value) {
                                          setState(() {
                                            _selectedDialCode = value!;
                                          });
                                        },
                                      ),
                                    ),
                                    SizedBox(width: 10),
                                    Expanded(
                                      child: TextField(
                                        keyboardType: TextInputType.phone,
                                        decoration: InputDecoration(
                                          border: OutlineInputBorder(
                                            borderRadius: BorderRadius.circular(8),
                                          ),
                                          hintText: "Enter your phone number",
                                          contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 12),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(height: 20),
                                Text("Password",
                                  style: GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold
                                  ),
                                ),
                                SizedBox(height: 8),
                                TextField(
                                  obscureText: !_isPasswordVisible,
                                  decoration: InputDecoration(
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(8),
                                    ),
                                    hintText: "Enter your password",
                                    suffixIcon: IconButton(
                                      onPressed: () {
                                        setState(() {
                                          _isPasswordVisible = !_isPasswordVisible;
                                        });
                                      },
                                      icon: Icon(
                                        _isPasswordVisible ? Icons.visibility : Icons.visibility_off,
                                        color: Colors.grey,
                                      ),
                                    ),
                                    contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 12),
                                  ),
                                ),
                                SizedBox(height: 3),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      "Wrong password",
                                      style: GoogleFonts.poppins(
                                        fontSize: 14,
                                        color: Colors.grey,
                                      ),
                                    ),
                                    TextButton(
                                      onPressed: () {
                                        Navigator.of(context).pushReplacementNamed("/forgot");
                                      },
                                      child: Text(
                                        "Forgot password?",
                                        style: GoogleFonts.poppins(
                                          fontSize: 14,
                                          color: Color(0xFF006400),
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),

                                SizedBox(height: 9),
                                CustomButton(text: "Continue", onPressed: () {
                                  // Handle login logic here
                                }),

                                SizedBox(height: 120),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      "Don't have an account?",
                                      style: GoogleFonts.poppins(
                                        fontSize: 14,
                                        color: Colors.grey,
                                      ),
                                    ),
                                    TextButton(
                                      onPressed: () {
                                        // Handle signup navigation here
                                      },
                                      child: Text(
                                        "Signup",
                                        style: GoogleFonts.poppins(
                                          fontSize: 14,
                                          color: Color(0xFF006400),
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),

                                
                              ],
                            ),

      
                          ),
                        ),
                        // Signup Tab
                        SingleChildScrollView(
                          child: Padding(padding: EdgeInsets.all(16.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(height: 30),
                                Text(
                                  "Phone Number",
                                  style: GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold
                                  ),
                                ),
                                SizedBox(height: 8),

                                Row(
                                  children: [
                                    Container(
                                      padding: EdgeInsets.symmetric(horizontal: 10),
                                      decoration: BoxDecoration(
                                        border: Border.all(color: Colors.grey),
                                        borderRadius: BorderRadius.circular(8),
                                      ),
                                      child: DropdownButton<String>(
                                        value: _selectedDialCode,
                                        underline: SizedBox.shrink(),
                                        items: africaCountryCodes.map((country) {
                                          return DropdownMenuItem(
                                            value: country['code'],
                                            child: Text(country['code']!),
                                          );
                                        }).toList(),
                                        onChanged: (value) {
                                          setState(() {
                                            _selectedDialCode = value!;
                                          });
                                        },
                                      ),
                                    ),
                                    SizedBox(width: 10),
                                    Expanded(
                                      child: TextField(
                                        keyboardType: TextInputType.phone,
                                        decoration: InputDecoration(
                                          border: OutlineInputBorder(
                                            borderRadius: BorderRadius.circular(8),
                                          ),
                                          hintText: "Enter your phone number",
                                          contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 12),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(height: 30),
                                CustomButton(text:  "Continue", onPressed: () {
                                  Navigator.of(context).pushReplacementNamed("/otp");
                                }),
                                SizedBox(height: 40),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      "Already have an account?",
                                      style: GoogleFonts.poppins(
                                        fontSize: 14,
                                        color: Colors.grey,
                                      ),
                                    ),
                                    TextButton(
                                      onPressed: () {
                                        // Handle login navigation here
                                      },
                                      child: Text(
                                        "Login",
                                        style: GoogleFonts.poppins(
                                          fontSize: 14,
                                          color: Color(0xFF006400),
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                            ],
                          ),
                        )
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
