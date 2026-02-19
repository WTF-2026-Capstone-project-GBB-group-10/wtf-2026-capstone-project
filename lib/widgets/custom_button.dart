import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  const CustomButton({
    super.key,
    required this.text,
    this.onPressed
    });

    final String text;
    final Function()? onPressed;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: Color(0xFF006400),
          foregroundColor: Colors.white,
          minimumSize: Size(MediaQuery.of(context).size.width * 0.25, 50),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16)
          ),
          padding: EdgeInsets.symmetric(horizontal: 70, vertical: 10)
        ),
        onPressed: onPressed, 
        child: Text(text)),
    );
  }
}