import 'package:flutter/material.dart';

class LoanScreen extends StatefulWidget {
  const LoanScreen({super.key});

  @override
  State<LoanScreen> createState() => _LoanScreenState();
}

class _LoanScreenState extends State<LoanScreen> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("Loan Screen",
      style: TextStyle(fontSize: 21, fontWeight: FontWeight.bold),
      ),
    );
  }
}