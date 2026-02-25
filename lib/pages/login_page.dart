import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:project_ggb/widgets/custom_button.dart';
import 'package:project_ggb/widgets/custom_textfield.dart';
import 'package:project_ggb/widgets/password_textfield.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {

  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  TextEditingController forgotPasswordController = TextEditingController();

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    forgotPasswordController.dispose();
    super.dispose();
  }

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
                                  "Email",
                                  style: GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold
                                  ),
                                ),
                                SizedBox(height: 8),
                                CustomTextfield(label: "Enter your Email",
                                textEditingController: emailController,
                                ),

                                SizedBox(height: 20),

                                Text("Password",
                                  style: GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold
                                  ),
                                ),
                                SizedBox(height: 8),
                               PasswordTextfield(label: "Enter your password",
                               textEditingController: passwordController),

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
                                  Navigator.of(context).pushReplacementNamed("/home");
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
                                  "Email",
                                  style: GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold
                                  ),
                                ),
                                SizedBox(height: 8),

                                CustomTextfield(label: "Enter your Email",
                                textEditingController: emailController,
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
