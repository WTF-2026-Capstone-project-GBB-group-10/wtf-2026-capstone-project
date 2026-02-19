import 'package:flutter/material.dart';
import 'package:project_ggb/pages/login_page.dart';
import 'package:project_ggb/pages/onboarding_page.dart';
import 'package:project_ggb/pages/welcome_page.dart';

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
        "/login" : (context) => LoginPage()
      },
      initialRoute: "/login",
      
    );
  }
}

