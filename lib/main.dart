import 'package:flutter/material.dart';
import 'package:project_ggb/pages/basic_details_page.dart';
import 'package:project_ggb/pages/enter_password_page.dart';
import 'package:project_ggb/pages/forgot_password_page.dart';
import 'package:project_ggb/pages/loan_application1.dart';
import 'package:project_ggb/pages/loan_application2.dart';
import 'package:project_ggb/pages/loan_application3.dart';
import 'package:project_ggb/pages/loan_application4.dart';
import 'package:project_ggb/pages/login_page.dart';
import 'package:project_ggb/pages/onboarding_page.dart';
import 'package:project_ggb/pages/otp_page.dart';
import 'package:project_ggb/pages/set_password_page.dart';
import 'package:project_ggb/pages/sucess_page.dart';
import 'package:project_ggb/pages/welcome_page.dart';
import 'package:project_ggb/widgets/bottom_navigation.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Green Bloom Bank',
      theme: ThemeData(
        
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      debugShowCheckedModeBanner: false,
      home: OnboardingPage(),
      routes: {
        "/onboarding" : (context) => OnboardingPage(),
        "/welcome" : (context) => WelcomePage(),
        "/login" : (context) => LoginPage(),
        "/forgot" : (context) => ForgotPasswordPage(),
        "/set": (context) => SetPasswordPage(),
        "/otp": (context) => OtpPage(),
        "/enterPassword" : (context) => EnterPasswordPage(),
        "/basicDetails" : (context) => BasicDetailsPage(),
        "/sucess" : (context) => SucessPage(),
        "/home" : (context) => BottomNavigation(),
        "/loan_app1" : (context) => LoanApplication1(),
        "/loan_app2" : (context) => LoanApplication2(),
        "/loan_app3" : (context) => LoanApplication3(),
        "/loan_app4" : (context) => LoanApplication4()
      },
      //initialRoute: "/login",
      
    );
  }
}

