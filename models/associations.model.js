module.exports = (models) => {
  const {
    Auth,
    FarmerProfile,
    Loan,
    Listing,
    Message,
    Repayment,
    CreditScore,
  } = models;

  console.log('Associating models...');

  if (!Auth || !FarmerProfile) {
    throw new Error('Auth or FarmerProfile model not loaded');
  }

 
  Auth.hasOne(FarmerProfile, { foreignKey: 'auth_id', as: 'profile' });
  FarmerProfile.belongsTo(Auth, { foreignKey: 'auth_id', as: 'auth' });

  
  FarmerProfile.hasMany(Loan, { foreignKey: 'user_id', as: 'loans' });
  Loan.belongsTo(FarmerProfile, { foreignKey: 'user_id', as: 'farmer' });

  
  FarmerProfile.hasOne(CreditScore, { foreignKey: 'user_id', as: 'creditScore' });
  CreditScore.belongsTo(FarmerProfile, { foreignKey: 'user_id', as: 'owner' });

  
  FarmerProfile.hasMany(Listing, { foreignKey: 'farmer_id', as: 'listings' });
  Listing.belongsTo(FarmerProfile, { foreignKey: 'farmer_id', as: 'farmer' });


  FarmerProfile.hasMany(Message, { foreignKey: 'sender_id', as: 'sentMessages' });
  FarmerProfile.hasMany(Message, { foreignKey: 'receiver_id', as: 'receivedMessages' });

  Message.belongsTo(FarmerProfile, { foreignKey: 'sender_id', as: 'sender' });
  Message.belongsTo(FarmerProfile, { foreignKey: 'receiver_id', as: 'receiver' });

  
  Listing.hasMany(Message, { foreignKey: 'listing_id', as: 'messages' });
  Message.belongsTo(Listing, { foreignKey: 'listing_id', as: 'listing' });

  
  Loan.hasMany(Repayment, { foreignKey: 'loan_id', as: 'repayments' });
  Repayment.belongsTo(Loan, { foreignKey: 'loan_id', as: 'parentLoan' });

  console.log('Associations loaded');
};