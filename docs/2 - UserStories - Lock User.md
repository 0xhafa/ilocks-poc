### Who is the User?

- The user will primarily be a holder of OPTY and/or OptyFi vault LP tokens;
- We will focus only on the perspective of this user;

## Feature / Epic - Token Lock App

**Description**

- As a holder of OPTY and/or OptyFi vault LP tokens, I want to access the Token Lock app, so that I can see all the available Lock Schedules and their details, lock and release my OPTY and/or OptyFi vault LP tokens, see the details of my locked positions and collect my rewards.

**Acceptance Criteria**
The users should be able to:

- see all the available Lock Schedules for all tokens (OPTY or OptyFi Vault tokens);
- lock their OPTY into any available Lock Schedule for OPTY;
- lock their OptyFi Vault tokens tokens into any available Lock Schedule for their OptyFi Vault token;
- Receive the correspondent balance in ERC1155 locked tokens for the Lock Schedule and release date they selected;
- See the details of their positions;
- See the current available amount of reward tokens for each lock position;
- See the amount of reward tokens already claimed;
- Claim rewards;
- Not have the conditions of my lock or rewards modified after I locked my tokens (total reward, release date and fees).

**Business Rules**

- The user must connect their wallet to the app in order to perform the above transactions (lock, release and claim rewards);
- The user must connect their wallet to the app in order to see the details of their locked positions;
- The user should NOT have to connect their wallet to see the available lock schedules and their details;

## Sub-feature / Story - Users should be able to see a list of all the available Lock Schedules, Release Dates, Fees and Reward Schedules for each type of token (OPTY or OptyFi Vault Tokens).

**Description**

- As a Lock User, I want to access the Token Lock app, so that can see a list of all the available Lock Schedules, Release Dates, Fees and Reward Schedules for each type of token available to be locked;

**Acceptance Criteria**
The users should be able to:

- see the list of Lock Schedule and release dates;
- see the origination, transfer and early release fees of each Lock Schedule;
- see the **rewardRate** of the for each **releaseDate**;
- see the estimated total reward of each Lock Schedule in each **releaseDate**;
- see the estimated reward APY of each Lock Schedule in each **releaseDate**;
- see the amount of tokens available to be locked in the specific **lockScheduleId** and **releaseDate**;

**Business Rules**

- The user should NOT have to connect their wallet to see the available lock schedules and their details (release dates, fees and rewards);
- The user should only see release dates in the future for the available Lock Schedules.
- The user should only see Lock Schedules with **lockScheduleStatus** = "ACTIVE";
- The Reward APY should update according to changes in market price of reward token;

## Sub-feature / Story - Users should be able to lock OPTY or OptyFi Vault Tokens

**Description**

- As an OPTY token holder, I want to lock up my OPTY tokens, so that I can earn more OPTY tokens as locking rewards;
- As an Opty Vault Token holder, I want to lock up my Vault Tokens, so that I can earn more OPTY tokens as locking rewards;

**Acceptance Criteria**
The users should be able to:

- select the token they want to lock;
- see the available lock schedules and release dates for that token;
- see the **rewardRate** of the for each **releaseDate**;
- see the estimated total reward of each Lock Schedule in each **releaseDate**;
- see the estimated reward APY of each Lock Schedule in each **releaseDate**;
- see the amount of tokens available to be locked in the specific **lockScheduleId** and **releaseDate** they choose;
- select a specific **lockScheduleId** and **releaseDate**;
- confirm the Lock Schedule parameters for the selected LockScheduleId and lock their tokens;

**Business Rules**

- The user must connect their wallet to the app in order to lock their tokens;
- The user should only see Lock Schedules with lockScheduleStatus = "ACTIVE";
- The user should only see release dates in the future for the available Lock Schedules.
- The user should confirm he accept the Lock Schedule parameters for the selected release date, including the release date, fees and rewards.

## Sub-feature / Story - Users should be able to see their locked tokens

**Description**

- As a lock user with locked tokens in my wallet, I want to access the Token Lock app, so that I can see the details of my lock positions.

**Acceptance Criteria**
The users should be able to:

- see their balance of locked tokens;
- see the metadata of their locked tokens;
- see the claimable rewards for each locked position;
- see the current fees of each lock position;
- see the remaining time for the current fees of each lock position;

**Business Rules**

- The user must connect their wallet to the app in order to see the details of their locked position

## Sub-feature / Story - Users should be able to release OPTY or OptyFi Vault Tokens

**Description**

- As a lock user with locked tokens in my wallet, I want to access the Token Lock app, so that I can release my locked tokens.

**Acceptance Criteria**
The users should be able to:

- see the list of locked tokens available to unlock and their balance; (block.timestamp >= releaseDate);
- input the amount of locked tokens to unlock;
- select max amount of locked tokens to unlock (their entire balance of the specific locked token);
- see the claimable amount of rewards for that position;
- select if they want to claim all the rewards (their entire claimable amount for that specific locked token);

**Business Rules**

- The users must connect their wallet to the app in order to see their released tokens.
- If no locked tokens to unlock, the release options should be hide;
- If no rewards to claim the "Claim Rewards" option should be hide;
- If current block.timestamp < releaseDate, show error:
  - "Lock Manager: Tokens not released yet."
- If unlockAmount > balance of locked tokens, show error message:
  - "Lock Manager: Not enough balance of locked tokens."

## Sub-feature / Story - Users should be able to early release locked tokens (with earlyReleaseFee)

**Description**

- As a lock user with locked tokens in my wallet, I want to access the Token Lock app, so that I can release my locked tokens before it respective **releaseDate**.

**Acceptance Criteria**
The users should be able to:

- see the list of all their locked tokens and their balance;
- input the amount of locked tokens to early release;
- select max amount of locked tokens to early release (their entire balance of the specific locked token);
- see the claimable amount of rewards for that position;
- select if they want to claim all the rewards (their entire claimable amount for that specific locked token);
- see the **earlyReleaseFee** total amount of each locked token;
- see the amount of OPTY or OptyFi Vault Tokens they will receive after early release;

**Business Rules**

- The users must connect their wallet to the app in order to see their released tokens.
- If no locked tokens to unlock, the release options should be hide;
- If no rewards to claim the "Claim Rewards" option should be hide;
- The user must accept the **earlyReleaseFee** before proceed to run the earlyRelease transaction;
- If current block.timestamp < releaseDate, show error:
  - "Lock Manager: Tokens not released yet."
- If unlockAmount > balance of locked tokens, show error message:
  - "Lock Manager: Not enough balance of locked tokens."

## Sub-feature / Story - Users should be able to see the market price and available LP for their locked positions (Not MVP)

**Description**

- As a lock user with locked tokens in my wallet, I want to access the Token Lock app, so that I can see the market price of my locked positions.

**Acceptance Criteria**

**Business Rules**

### Sub-feature / Story - Users should be able to claim rewards for locked tokens positions

**Description**

- As a lock user with locked tokens in my wallet, I want to access the Token Lock app, so that I can claim rewards of my locked positions.

**Acceptance Criteria**
The users should be able to:

- see the claimable amount of rewards for each token they locked;
- select if they want to claim all the rewards (their entire claimable amount for that specific locked token);

**Business Rules**

- The users must connect their wallet to the app in order to see their claimable rewards;
- If no rewards to claim the "Claim Rewards" option should be hide;

## Sub-feature / Story - Users should be able to claim and automatically lock the rewards earned (Not MVP)

**Description**

- As a lock user with claimable rewards, I want to access the Token Lock app, so that I can select a new Lock Schedule and lock my claimable reward balances.

**Acceptance Criteria**

**Business Rules**

## Sub-feature / Story - Users should be able to sort and/or filter through the available Lock Schedules (Not MVP)

**Description**

- As a lock user, I want to access the Token Lock app, so that I can sort and/or filter through the available Lock Schedules.

**Acceptance Criteria**

**Business Rules**
