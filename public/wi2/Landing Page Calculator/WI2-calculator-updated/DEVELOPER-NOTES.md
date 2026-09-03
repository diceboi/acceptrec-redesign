# WI² Workforce Cost Calculator — developer notes

## Prototype

`index.html` is a standalone responsive prototype. It has no build step. The lead forms and report link remain demonstrators and must be connected to the live website services.

## Admin capacity wording and behaviour

The page deliberately describes reduced administrative workload as capacity that can be:

- redeployed elsewhere in the business;
- released for higher-value work; or
- used to avoid additional headcount as the operation grows.

Do not introduce redundancy, dismissal, job-loss or “remove a person” language when porting the prototype.

The existing double-count protection remains. If role capacity and existing management time both apply, the calculator uses the higher value rather than adding them:

```text
role capacity value = fully loaded annual role cost × selected capacity percentage
management time value = weekly hours × weeks per year × loaded hourly cost × selected percentage
admin value when both apply = max(role capacity value, management time value)
```

The percentages are user-selected scenarios and are not preselected or predicted outcomes.

## Attrition and retention logic

The user selects a percentage reduction in current four-week attrition: 25%, 50% or 75%. These are relative reductions, not percentage-point changes.

```text
current early leavers = annual inductions × (current attrition rate ÷ 100)
prevented early leavers = current early leavers × (selected attrition reduction ÷ 100)
retention saving = prevented early leavers × cost per early leaver
```

Example: 500 annual inductions at 20% current attrition produces 100 current early leavers. A 50% reduction scenario prevents 50 early leavers. At £600 per early leaver, the potential retention saving is £30,000.

The 50% option is visually prominent as a useful scenario to test, but no option is selected on first load. Do not preselect it or present it as a promise, expected result or guaranteed WI² outcome.

Supporting copy explains that WI² Mentor coaches workers and Connect supports and engages them, so improved retention could reduce current attrition. Retain the qualification that actual improvement depends on the operation and implementation.

## Worked example button

The worked example intentionally loads the 50% retention scenario only after the visitor clicks “Use worked example figures”. It uses:

```text
annual temporary hours: 25,000
agency margin per hour: £1.00
role cost: £35,000
role capacity released: 100%
management/admin time: 20 hours/week × 52 weeks × £30/hour × 50%
annual inductions: 500
current four-week attrition: 20%
attrition reduction tested: 50%
cost per early leaver: £600
```

Expected result:

```text
annual agency margin: £25,000
role capacity value: £35,000
management time value: £15,600
admin value after double-count protection: £35,000
current early leavers: 100
prevented early leavers: 50
retention saving: £30,000
total potential annual value: £65,000
net value after margin: £40,000
value per £1 of margin: 2.6x
```

## Payload additions

The prototype payload now includes:

- `current_early_leavers`
- `attrition_reduction_percentage`
- `prevented_early_leavers`
- `attrition_value`
- `released_or_avoided_capacity_value`

`administration_headcount_value` remains for compatibility with the earlier prototype. It represents released/avoided administrative capacity in the updated user-facing copy.

## Integration reminders

1. Replace the prototype header/logo with the live Accept components.
2. Connect lead capture to the website enquiry process or CRM.
3. Add contacts to Campaign Monitor only where the separate consent box is selected.
4. Set `CONFIG.reportUrl` to the anonymised WI² report.
5. Map the existing data-layer event names into the live analytics implementation.
6. Remove the “Working prototype” badge before launch.
7. Keep the result visible without requiring contact details.

See `TEST-CASES.md` for the regression cases used for this version.
