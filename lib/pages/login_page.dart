import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}
final List <Map<String, String>> africaCountryCodes = [
  {"code": "+234", "name": "Nigeria"},
  {"code": "+251", "name": "Ethopia"},
  {"code": "+254", "name": "Kenya"},
  {"code": "+212", "name": "Morocco"},
  {"code": "+216", "name": "Tunisia"},
  {"code": "+225", "name": "Ivory Coast"},
  {"code": "+221", "name": "Senegal"},
  {"code": "+230", "name": "Mauritius"},
  {"code": "+228", "name": "Togo"},
  {"code": "+223", "name": "Mali"},
  {"code": "+91", "name": "India"},
  {"code": "+81", "name": "Japan"},
  {"code": "+61", "name": "Australia"},
];

String _selectedDialCode = '+234';
class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(height: 150),
            Text(
              "Green Bloom Bank",
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
                color: Colors.lightGreen,
              ),
            ),

            SizedBox(height: 90),

            DefaultTabController(
              length: 2,
              child: TabBar(
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
            ),

            SizedBox(height: 100),

            TabBarView(
              children: [
                Padding(
                  padding: EdgeInsetsGeometry.all(16.0),
                  child: ListView(
                    children: [
                      Text(
                        "Phone Number",
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w300,
                        ),
                      ),
                      Row(
                        children: [
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 8),                            child: Container(
                              decoration: BoxDecoration(
                                border: Border.all(color: Colors.grey),
                                borderRadius: BorderRadius.circular(8),
                              ),
                              child: DropdownButton(
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
                            
                            )
                          )
              
                          
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
