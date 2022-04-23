### Who is the User?

- The user will primarily be the OptyFi Operator/Admin who will be responsible for creating and managing Lock Schedules.
- We will focus only on the perspective of this user.

## Feature / Epic - Manage Lock Schedule App

**Description:**

- As a Lock Manager, I want to access the Manage Lock Schedule app, so I can create and manage Lock Schedules.

**Acceptance Criteria:**
Lock manager should be able to...

- create a Lock Schedule;
- pause deposits into a Lock Schedule;
- resume paused Lock Schedule;
- add a Reward Schedule to an existing Lock Schedule;
- recall unallocated rewards from reward vesting contract;
- modify Lock Schedule's base URI;
- modify Reward Schedule in a existent Lock Schedule????
- modify fees in a existent Lock Schedule????

**Business Rules:**

- Lock Manager must connect their wallet to the app in order to perform the above transactions
- Lock Manager’s address must be whitelisted to be able to create and manage Lock Schedules
- If the Lock Manager's address is not whitelisted, they should get an error message like the following:
  - _“You are not whitelisted to create a Lock Schedule.“_

## Create Lock Schedule

**Description:**
As a Lock Manager, I want to access the Manage Lock Schedule app, so I can create Lock Schedules.

**Acceptance Criteria:**
The lock manager must specify:

- the address of the **tokenLocked** in the lock schedule. e.g. 0x6d8BfdB4c4975bB086fC9027e48D5775f609fF88 (opUSDCgrow);
- a lock schedule **startingDate**. e.g. 01/01/2022;
- the **lockScheduleBaseURI** containing the metadata for each token in the lock schedule;
- single or multiple **releaseDates**. e.g. [31/03/2022, 30/09/2022];
- the **originationFee** in bps. e.g. 50 bps;
- single or multiple **transferFee**, **earlyReleaseFee** and **remainingLockTime**. e.g. [{remainingLockTime: 60 days, transferFee: 25 bps, earlyReleaseFee: 1000 bps}, {remainingLockTime: 270 days, transerFee: 50 bps, earlyReleaseFee: 2500 bps}] , meaning that if there is less than 60 days left the lock users will pay 1000 bps to release early and 25 bps to transfer. However, if there is more than 60 days and less than 270 days left to the end of the lock period the lock users will pay 2500 bps release early his locked tokens and 50 bps to transfer;
- the address of the **rewardToken**. e.g. (OPTY token address);
- the **initialRewardAmount**. e.g. 1,000,000 OPTY;
- if the **rewardSchedule** is revocable or not. e.g. true or false;
- if **vestingDuration** will be equal to **remainingLockTime**. e.g. true or false;
- single or multiple **lockDuration**, **vestingDuration**, **rewardRate**, **cliff**, and **slicePeriod**. e.g. [{lockDuration: 90 days, vestingDuration: 90 days, rewardRate: 1 reward token/locked token/day, cliff: 7 days, slicePeriod: 1 hour},{lockDuration: 270 days, vestingDuration: 270 days, rewardRate: 2 reward token/locked token/day, cliff: 14 days, slicePeriod: 1 hour}]. meaning that if the lock duration is less than 90 days, the tokens will be vested during 90 days, at the rate of 1 reward token/locked token/day, starting 7 days after date the user locked, with some amount being vested each hour. However, if the lock duration is more than 90 days and less than 270 days, the tokens will be vested during 270 days, at the rate of 2 reward token/locked token/day, starting 14 days after date the user locked, with some amount being vested each hour.

**Business Rules:**

- Lock Manager must connect their wallet to the app in order to perform the above transactions
- Lock Manager’s address must be whitelisted to be able to create and manage Lock Schedules
- If the Lock Manager's address is not whitelisted, they should get an error message like the following:
  - _“You are not whitelisted to create a Lock Schedule.“_
- **tokenLocked** must not be address(0x0);
- **tokenLocked** must be ERC20????
- **startingDate** must be equal or greater than block.timestamp;
- it must revert if two or more **releaseDates** have the same value;
- **releaseDates** must be greater than **startingDate**;
- it must revert if two or more **remaingLockTime** have the same value;
- **originationFee**, **transferFee** and **earlyReleaseFee** must be less than 100% (**MAX_BPS**);
- one of the fees **remainingLockTime** must have at least the duration of the lock schedule max release date minus starting date;
- **rewardToken** must not be address(0x0);
- **rewardToken** must be ERC20????
- **initialRewardAmount** must be greater than 0;
- it must revert if two or more **lockDuration** have the same value;
- **lockDuration** must be greater than zero;
- **slicePeriod** must be equal or greater than 1 second and less than **vestingDuration**

**Technical Requirements**

## Set Lock Schedule URI

**Description:**
As a Lock Manager, I want to access the Manage Lock Schedule app, so I can update a **lockScheduleBaseURI**.

**Acceptance Criteria:**
The lock manager should be able to:

- select an existing **lockSchedule** managed by the connected wallet;
- set a new **lockScheduleBaseURI** for the lockSchedule selected;

**Business Rules:**

- Lock Manager must connect their wallet to the app in order to perform the above transactions
- Lock managers must only be able to set a new **lockScheduleBaseURI** for the lockSchedule they manage.
- If the user tries to set a new **lockScheduleBaseURI** in a lockSchedule they don't manage they should get the following message:
  - "Only lock manager can set new base URI"

**Technical Requirements**

## Pause Lock Schedule

**Description:**
As a Lock Manager, I want to access the Manage Lock Schedule app, so I can change the status of the lockSchedule to "PAUSED".

**Acceptance Criteria:**
The lock manager should be able to:

- select an existing **lockSchedule** managed by the connected wallet;
- set the lockSchedule **lockScheduleStatus** to "PAUSED".

**Business Rules:**

- Lock Manager must connect their wallet to the app in order to perform the above transactions
- Lock managers must only be able to change the **lockScheduleStatus** for the lockSchedule they manage.
- If the user tries to set a new **status** in a lockSchedule they don't manage they should get the following message:
  - "Only lock manager can change the lock schedule status"

**Technical Requirements**

## Resume Lock Schedule

**Description:**
As a Lock Manager, I want to access the Manage Lock Schedule app, so I can change the status of the lockSchedule to "ACTIVE".

**Acceptance Criteria:**
The lock manager should be able to:

- select an existing **lockSchedule** managed by the connected wallet;
- set the lockSchedule **lockScheduleStatus** to "ACTIVE".

**Business Rules:**

- Lock Manager must connect their wallet to the app in order to perform the above transactions
- Lock managers must only be able to change the **lockScheduleStatus** for the lockSchedule they manage.
- If the user tries to set a new **lockScheduleStatus** in a lockSchedule they don't manage they should get the following message:
  - "Only lock manager can change the lock schedule status"

**Technical Requirements**

## Add Reward Schedule

**Description:**
As a Lock Manager, I want to access the Manage Lock Schedule app, so I can add a new **rewardSchedule** to an existing **lockSchedule**.

**Acceptance Criteria:**
The lock manager must specify:

- the lockScheduleId he wants to add a new vesting schedule;
- the address of the **rewardToken**. e.g. (OPTY token address);
- the **initialRewardAmount**. e.g. 1,000,000 OPTY;
- if the **rewardSchedule** is revocable or not. e.g. true or false;
- if **vestingDuration** will be equal to **remainingLockTime**. e.g. true or false;
- single or multiple **lockDuration**, **vestingDuration**, **rewardRate**, **cliff**, and **slicePeriod**. e.g. [{lockDuration: 90 days, vestingDuration: 90 days, rewardRate: 1 reward token/locked token/day, cliff: 7 days, slicePeriod: 1 hour},{lockDuration: 270 days, vestingDuration: 270 days, rewardRate: 2 reward token/locked token/day, cliff: 14 days, slicePeriod: 1 hour}]. meaning that if the lock duration is less than 90 days, the tokens will be vested during 90 days, at the rate of 1 reward token/locked token/day, starting 7 days after date the user locked, with some amount being vested each hour. However, if the lock duration is more than 90 days and less than 270 days, the tokens will be vested during 270 days, at the rate of 2 reward token/locked token/day, starting 14 days after date the user locked, with some amount being vested each hour.

**Business Rules:**

- Lock Manager must connect their wallet to the app in order to perform the above transactions
- Lock managers must only be able to change the **addRewardSchedule** in the lockSchedule they manage.
- If the user tries to **addRewardSchedule** in a lockSchedule they don't manage they should get the following message:
  - "Only lock manager can add reward schedule"
- **rewardToken** must not be address(0x0);
- **rewardToken** must be ERC20????
- **initialRewardAmount** must be greater than 0;
- it must revert if two or more **lockDuration** have the same value;
- **lockDuration** must be greater than zero;
- **slicePeriod** must be equal or greater than 1 second and less than **vestingDuration**

**Technical Requirements**

## Recall Unallocated Reward Tokens

**Description:**
As a Lock Manager, I want to access the Manage Lock Schedule app, so I can recall unallocated rewards tokens in a rewardVesting schedule.

**Acceptance Criteria:**
The Lock Manager should be able to:

- select a previously created liquidity lock offering
- see the amount of unallocated reward tokens from the selected offering
  - This amount of unallocated reward tokens from the selected offering should be equal to **initialRewardAmount** + deposits made in the reward vesting contract - **vestedAmount**
- recall the unallocated reward tokens from the selected offering
- After the Operator has recalled the unallocated reward tokens, the amount of unallocated reward tokens displayed should be equal to **“0“**

**Business Rules:**

- The Lock Manager must connect their wallet to the app in order to recall unallocated reward tokens from a liquidity lock offering
- The user must only be able to change the **recallUnallocatedRewards** in the lockSchedule they manage.
- The Lock Manager should be able to recall unallocated reward tokens from a liquidity lock offering only if **lockScheduleStatus** = “PAUSED”
- When Lock Manager tries to **recallUnallocatedRewards** in a lock schedule with **lockScheduleStatus** != “PAUSED” they should get the following message:
  - _"Unallocated reward tokens can only be recalled when lock schedule status is PAUSED.“_

**Technical Requirements**
