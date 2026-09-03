# WI² calculator regression test cases

## 1. No scenario preselected

- Open `index.html` without a query string.
- Confirm no admin-capacity percentage is selected.
- Confirm none of the 25%, 50% or 75% attrition-reduction scenarios is selected.
- Confirm 50% is visually prominent only as a “Test scenario”.

## 2. Worked example

- Select “Use worked example figures”.
- Expected agency margin: £25,000.
- Expected released/avoided role capacity: £35,000.
- Expected current early leavers: 100.
- Expected prevented early leavers at 50%: 50.
- Expected retention saving: £30,000.
- Expected total potential annual value: £65,000.
- Expected net value after margin: £40,000.
- Expected value per £1 of margin: 2.6x.

## 3. Relative reduction, not percentage points

- Use 200 annual inductions, 10% attrition, £1,000 per early leaver and a 50% attrition reduction.
- Current early leavers must be 20.
- Prevented early leavers must be 10.
- Retention saving must be £10,000.
- The calculator must not treat the 50% selection as a 50-percentage-point change.

## 4. Other attrition scenarios

Using 400 inductions, 25% attrition and £500 per early leaver:

- 25% reduction → 100 current leavers, 25 prevented, £12,500 saving.
- 50% reduction → 100 current leavers, 50 prevented, £25,000 saving.
- 75% reduction → 100 current leavers, 75 prevented, £37,500 saving.

## 5. Admin role-capacity scenario

- Use a £40,000 fully loaded role cost and 75% released capacity.
- Expected value: £30,000.
- Confirm the copy says this capacity could be redeployed, released for higher-value work or used to avoid additional headcount.

## 6. Double-count protection

- Choose “Both apply”.
- Set role capacity value to £35,000.
- Set management time value to £15,600.
- Expected admin value: £35,000, not £50,600.

## 7. Unknown attrition

- Select “No — my agency has not provided it.”
- Confirm attrition is shown as excluded.
- Confirm the workforce information-gap panel appears.
- Confirm the core margin/admin result remains available.

## 8. Responsive and interaction checks

- Desktop: test at 1440 × 1000; confirm the sticky result panel, fields, scenario controls, results and modal are readable and usable.
- Mobile: test at 390 × 844; confirm no horizontal overflow, controls remain tappable, scenario copy wraps cleanly and the results/modal remain readable.
- Confirm copy-result, print/save, email-calculation and Workforce Cost Review controls still respond.
