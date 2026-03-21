import 'package:flutter/material.dart';

class MarketScreen extends StatefulWidget {
  const MarketScreen({super.key});

  @override
  State<MarketScreen> createState() => _MarketScreenState();
}

class _MarketScreenState extends State<MarketScreen> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text("Market Screen",
      style: TextStyle(fontSize: 21, fontWeight: FontWeight.bold),
      ),
    );
  }
}