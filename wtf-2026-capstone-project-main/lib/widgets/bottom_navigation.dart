import 'package:flutter/material.dart';
import 'package:project_ggb/pages/buyers_screen.dart';
import 'package:project_ggb/pages/home_screen.dart';
import 'package:project_ggb/pages/loan_screen.dart';
import 'package:project_ggb/pages/market_screen.dart';
import 'package:project_ggb/pages/profile_screen.dart';

class BottomNavigation extends StatefulWidget {
  const BottomNavigation({super.key});

  @override
  State<BottomNavigation> createState() => _BottomNavigationState();
}

class _BottomNavigationState extends State<BottomNavigation> {
  var indexToBeShown = 0;
  List pages  = [HomeScreen(), LoanScreen(), MarketScreen(), BuyersScreen(), ProfileScreen()];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: pages [indexToBeShown],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: indexToBeShown,
        onTap: (value) {
          setState(() {
            indexToBeShown = value;
          });
        }, 
        selectedItemColor: Color(0xFF006400), // color for active tab 
        unselectedItemColor: Colors.grey, // color for inactive tabs 
        backgroundColor: Colors.white, // bar background 
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(label: "Home", icon: Icon(Icons.home)),
          BottomNavigationBarItem(label: "Loans", icon: Icon(Icons.location_city)),
          BottomNavigationBarItem(label: "Market", icon: Icon(Icons.mark_email_read_outlined)),
         BottomNavigationBarItem(label: "Buyers", icon: Icon(Icons.people)),
          BottomNavigationBarItem(label: "Profile", icon: Icon(Icons.person))
        ],
         ),
    );
  }
}