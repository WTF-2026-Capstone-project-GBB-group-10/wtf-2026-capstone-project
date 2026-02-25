import 'package:flutter/material.dart';

class BuyersScreen extends StatefulWidget {
  const BuyersScreen({super.key});

  @override
  State<BuyersScreen> createState() => _BuyersScreenState();
}

class _BuyersScreenState extends State<BuyersScreen> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("Buyers Screen",
      style: TextStyle(fontSize: 21, fontWeight: FontWeight.bold),
      ),
    );
  }
}