from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class LoanData(BaseModel):
    age: int
    education_level: int
    years_farming: int
    farm_size: float
    crop_type: str
    irrigation_access: bool
    market_distance_km: float
    annual_income: float
    savings: float
    mobile_money: bool
    coop_member: bool
    previous_repayment: bool
    loan_amount: float


@app.post("/full-assessment")
def assess_loan(data: LoanData):

    score = 0

    if data.previous_repayment:
        score += 30

    if data.savings > 2000:
        score += 20

    if data.mobile_money:
        score += 15

    if data.coop_member:
        score += 10

    if data.annual_income > 15000:
        score += 15

    probability = round(score / 100, 2)

    if probability >= 0.7:
        risk = "low"
        action = "approve"
    elif probability >= 0.4:
        risk = "medium"
        action = "review"
    else:
        risk = "high"
        action = "decline"

    return {
        "ml_prediction": action,
        "repay_probability": probability,
        "rule_score": score,
        "risk_level": risk,
        "recommendation": f"Farmer classified as {risk} risk",
        "action": action
    }