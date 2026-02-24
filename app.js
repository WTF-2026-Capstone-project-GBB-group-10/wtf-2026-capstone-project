const express = require('express');
const app = express();


app.use(express.json());


const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const loanRoutes = require('./routes/loan.route');
const listingRoutes = require('./routes/listing.route');
const messageRoutes = require('./routes/messages.route');
const repaymentRoutes = require('./routes/repayment.route');
const creditScoreRoutes = require('./routes/creditScore.route');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/loans', loanRoutes);
app.use('/api/v1/listings', listingRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/repayments', repaymentRoutes);
app.use('/api/v1/creditscores', creditScoreRoutes);

app.get('/', (req, res) => {
  res.send('🚀 AgriFinTech API Running');
});

module.exports = app;