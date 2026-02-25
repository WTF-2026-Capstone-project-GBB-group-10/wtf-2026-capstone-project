import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
               Container(
            color: Color(0xFF006400),
            padding: EdgeInsets.symmetric(horizontal: 8),
            child: SafeArea(child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    CircleAvatar(
                  radius: 20,
                  backgroundImage: AssetImage(""),
                ),
                SizedBox(width: 8),
      
                Text("Good Morning\nJohn Doe",
                style: TextStyle( 
                  color: Colors.white, 
                  fontSize: 10, 
                  fontWeight: FontWeight.w600),
                ),
                  ],
                ),
                IconButton( 
                  icon: const Icon(Icons.notifications, color: Colors.white), 
                  onPressed: () {})
              ],
          
            )
            ),
          ),
          SizedBox(height: 10),

          Container(
            width: MediaQuery.of(context).size.width * 1.3,
            height: 150,
            margin: const EdgeInsets.all(16), 
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8), 
            decoration: BoxDecoration( color: Colors.white, 
            borderRadius: BorderRadius.circular(12), 
            boxShadow: [ BoxShadow( color: Colors.black12, 
            blurRadius: 6, offset: Offset(0, 3), ), ], ),

            child:
                   CircularPercentIndicator(
                      radius: 60.0,
                      lineWidth: 9.0,
                      percent: 0.7,
                      center:  Text("Credit Score indicator \n                70%",
                      style: TextStyle(fontSize: 8, fontWeight: FontWeight.bold),
                      ),
                      progressColor: Color(0xFF006400),
                      circularStrokeCap: CircularStrokeCap.butt,
                    backgroundColor: Colors.grey.shade300,
                    ),
                 
               ),
          

          SizedBox(height: 10),

          Text("Loan Related",
          style: GoogleFonts.poppins(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
          ),
      
          SizedBox(height: 8),
      
          Container(
            width: MediaQuery.of(context).size.width * 1.3,
            height: 150,
            margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
             padding: const EdgeInsets.all(16),
             decoration: BoxDecoration( color: Colors.white,
              borderRadius: BorderRadius.circular(12), 
              boxShadow: [ BoxShadow( color: Colors.black12, blurRadius: 6, offset: Offset(0, 3), ), ], ),
            child: Row(
              children: [
                Image.asset("assets/loan_icon.png"),
                SizedBox(width: 50),
                Column(
                  children: [
                    Text("Get fast, AI powered\nfinancing for your\nfarm or business"),
                  
                ElevatedButton(
                  onPressed: (){
                    Navigator.of(context).pushReplacementNamed("/loan_app1");
                  }, 
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xFF006400),
                  foregroundColor: Colors.white,
                  minimumSize: Size(MediaQuery.of(context).size.width * 0.25, 20),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16)
                ),
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10)
                ),
                child: Text("Apply for Loan"),
                )
                  ],
                )
              ],
            ),
          ),
          SizedBox(height: 8),

          Container(
            width: MediaQuery.of(context).size.width * 1.3,
            height: 150,
            margin: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
             padding: const EdgeInsets.all(16),
             decoration: BoxDecoration( color: Colors.white,
              borderRadius: BorderRadius.circular(12), 
              boxShadow: [ BoxShadow( color: Colors.black12, blurRadius: 6, offset: Offset(0, 3), ), ], ),
            child: Row(
              children: [
                Image.asset("assets/green_stats.png"),
                SizedBox(width: 50),
                Column(
                  children: [
                    Text("Get fast, AI powered\nfinancing for your\nfarm or business"),
                  
                ElevatedButton(
                  onPressed: (){}, 
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xFF006400),
                  foregroundColor: Colors.white,
                  minimumSize: Size(MediaQuery.of(context).size.width * 0.25, 20),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16)
                ),
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10)
                ),
                child: Text("Loan Status"),
                )
                  ],
                )
              ],
            ),
          )

              ],
            
          ),
      ),


          
          );
  }
}
