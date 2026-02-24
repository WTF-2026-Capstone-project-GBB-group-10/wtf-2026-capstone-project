module.exports = (models) => {
  const {
    Auth,
    User,
    Loan,
    Listing,
    Message,
    Repayment,
    CreditScore,
  } = models;

  /**
   * AUTH ↔ USER
   */
  Auth.hasOne(User, { foreignKey: 'auth_id', as: 'profile' });
  User.belongsTo(Auth, { foreignKey: 'auth_id', as: 'auth' });

  /**
   * USER ↔ LOANS
   */
  User.hasMany(Loan, { foreignKey: 'user_id', as: 'loans' });
  Loan.belongsTo(User, { foreignKey: 'user_id', as: 'borrower' });

  /**
   * USER ↔ CREDIT SCORE
   */
  User.hasOne(CreditScore, { foreignKey: 'user_id', as: 'creditScore' });
  CreditScore.belongsTo(User, { foreignKey: 'user_id', as: 'owner' });

  /**
   * USER ↔ LISTINGS
   */
  User.hasMany(Listing, { foreignKey: 'farmer_id', as: 'listings' });
  Listing.belongsTo(User, { foreignKey: 'farmer_id', as: 'farmer' });

  /**
   * USER ↔ MESSAGES
   */
  User.hasMany(Message, { foreignKey: 'sender_id', as: 'sentMessages' });
  User.hasMany(Message, { foreignKey: 'receiver_id', as: 'receivedMessages' });

  Message.belongsTo(User, { foreignKey: 'sender_id', as: 'sender' });
  Message.belongsTo(User, { foreignKey: 'receiver_id', as: 'receiver' });

  /**
   * LISTING ↔ MESSAGES
   */
  Listing.hasMany(Message, { foreignKey: 'listing_id', as: 'messages' });
  Message.belongsTo(Listing, { foreignKey: 'listing_id', as: 'listing' });

  /**
   * LOAN ↔ REPAYMENTS
   */
  Loan.hasMany(Repayment, { foreignKey: 'loan_id', as: 'repayments' });

  Repayment.belongsTo(Loan, {
    foreignKey: 'loan_id',
    as: 'parentLoan', // ✅ FIXED (was "loan")
  });
};