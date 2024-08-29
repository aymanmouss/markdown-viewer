# Tic-Tac-Toe Project Introduction

## Project Objectives

- Create a simple Tic-Tac-Toe game
- Display the game grid
- Allow two players to place X and O alternately
- Determine the winner or a tie

## Main Program Structure

```java
public class Main {
    public static void main(String[] args) {
        final var scanner = new Scanner(System.in);
        final var game = new TicTacToe();
        while (true) {
            System.out.println(game);
            System.out.println("Please enter a number [1-9]:");
            final var playerInput = scanner.nextInt();
            // Game logic to be implemented
        }
    }
}
```

## TicTacToe Class

```java
public class TicTacToe {
    private char[][] grid = new char[][]{
        {'.', '.', '.'},
        {'.', '.', '.'},
        {'.', '.', '.'}
    };

    @Override
    public String toString() {
        final var builder = new StringBuilder();
        builder.append("Tic-Tac-Toe Grid: ").append(LINE_SEPARATOR);
        for (char[] line : grid) {
            for (char cell : line) {
                builder.append(SPACE).append(cell).append(SPACE);
            }
            builder.append(LINE_SEPARATOR);
        }
        return builder.toString();
    }
}
```

- we created a `Calss` to import the constant:

```java
public class StringConstant {
    public static final String LINE_SEPARATOR = System.lineSeparator();
    public static final String SPACE = " ";
}
```

## Explanation of toString and StringBuilder

- `toString()` method is overridden to provide a string representation of the game grid.
- `StringBuilder` is used for efficient string concatenation.
- The method builds a string by appending the grid contents row by row.
- `LINE_SEPARATOR` and `SPACE` are constants for formatting (defined in a separate class).

## Key Concepts

1. 2D array for the game grid
2. Use of Scanner for user input
3. StringBuilder for efficient string manipulation
4. Overriding toString for custom object representation

package com.dyma.game;

# Tic-Tac-Toe Player Turns Implementation

### Player Enumeration

```java
public enum Player {
    FIRST, SECOND
}
```

### Updated Main Class

```java
public class Main {
    public static void main(String[] args) {
        final var scanner = new Scanner(System.in);
        final var game = new TicTacToe();
        var player = Player.FIRST;
        while (true) {
            System.out.println(game);
            System.out.println("Please enter a number [1-9]:");
            final var playerInput = scanner.nextInt();
            game.processInput(player, playerInput);
            player = nextPlayer(player);
        }
    }

    private static Player nextPlayer(Player player) {
        return player.equals(Player.FIRST) ? Player.SECOND : Player.FIRST;
    }
}
```

### Updated TicTacToe Class

```java
public class TicTacToe {
    private char[][] grid = new char[3][3];

    public void processInput(Player player, int playerInput) {
        final var row = (playerInput - 1) / 3;
        final var column = (playerInput - 1) % 3;
        if (grid[row][column] == '.') {
            grid[row][column] = player.equals(Player.FIRST) ? 'X' : 'O';
        }
    }

    // toString method remains the same
}
```

Key points:

1. Player turns are managed using an enum
2. The `nextPlayer` method switches between FIRST and SECOND players
3. Cell selection uses mathematical calculations for efficiency
4. The `processInput` method updates the grid based on the current player

# Tic-Tac-Toe Win Conditions Summary

## TicTacToe Class Updates

The `TicTacToe` class now includes a new method `checkWin()` to verify if a player has won:

```java
public class TicTacToe {
    private char[][] grid = new char[3][3];

    // ... existing code ...

    public boolean checkWin() {
        for (int i = 0; i < 3; i++) {
            var checkWinLine = grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2] && grid[i][2] != '.';
            var checkWinColumn = grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i] && grid[2][i] != '.';
            if (checkWinLine || checkWinColumn) {
                return true;
            }
        }
        var checkWinDiagonal1 = grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[2][2] != '.';
        var checkWinDiagonal2 = grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && grid[2][0] != '.';
        return checkWinDiagonal1 || checkWinDiagonal2;
    }

    // ... rest of the class ...
}
```

## Main Class Updates

The `Main` class now checks for a win condition after each move:

```java
public class Main {
    public static void main(String[] args) {
        final var scanner = new Scanner(System.in);
        final var game = new TicTacToe();
        var player = Player.FIRST;
        while (true) {
            System.out.println(game);
            System.out.println("Please enter a number [1-9]:");
            final var playerInput = scanner.nextInt();
            game.processInput(player, playerInput);
            if (game.checkWin()) {
                System.out.println(game);
                System.out.println("Player " + player + " has won the game!");
                break;
            }
            player = nextPlayer(player);
        }
    }

    // ... rest of the class ...
}
```

## Key Points

1. The `checkWin()` method checks all possible winning configurations:

   - All rows
   - All columns
   - Both diagonals

2. It uses logical AND (`&&`) to ensure all cells in a winning line are the same and not empty.

3. Logical OR (`||`) is used to check if any winning condition is met.

4. In the `Main` class, `checkWin()` is called after each move. If it returns true, the game ends and the winner is announced.

5. The game loop breaks when a win is detected, ending the game.

# Tic-Tac-Toe: Draw Condition and Improvements

## 1. Handling Draw Condition

### TicTacToe Class Addition

```java
public boolean checkDraw() {
    for (char[] line : grid) {
        for (char cell : line) {
            if (cell == '.') {
                return false;
            }
        }
    }
    return true;
}
```

### Main Class Update

```java
if (game.checkDraw()) {
    System.out.println(game);
    System.out.println("Match nul. Personne n'a gagné !");
    break;
}
```

## 2. Further Improvements

1. Error handling for input validation (1-9)
2. Error handling for already played cells
3. Option to quit the game mid-play
4. Allow players to enter their names

## 3. Improved Implementation

### TicTacToe Class

```java
public class TicTacToe {
    private char[][] grid = new char[3][3];

    public void processInput(Player player, int playerInput) throws TicTacToeInvalidInputException {
        final var row = (playerInput - 1) / 3;
        final var column = (playerInput - 1) % 3;
        if (grid[row][column] == '.') {
            grid[row][column] = player.equals(Player.FIRST) ? 'X' : 'O';
        } else {
            throw new TicTacToeInvalidInputException("La case est déjà occupée");
        }
    }

    // ... (other methods remain the same)
}
```

### Main Class

```java
public class Main {
    public static void main(String[] args) {
        final var game = new TicTacToe();
        var player = Player.FIRST;
        final var players = initPlayers();
        System.out.println(game);
        while (true) {
            System.out.println("Joueur : " + players.get(player) + " / Veuillez saisir un des chiffres [1-9] :");
            try {
                final var playerInput = scanInput();
                game.processInput(player, playerInput);
                System.out.println(game);
                if (game.checkWin()) {
                    System.out.println("Le joueur " + players.get(player) + " a gagné la partie ! :");
                    break;
                }
                if (game.checkDraw()) {
                    System.out.println("Match nul. Personne n'a gagné !");
                    break;
                }
                player = nextPlayer(player);
            } catch (TicTacToeInvalidInputException e) {
                System.out.println("Le nombre saisi doit être entre 1 et 9");
            } catch (Exception e) {
                System.out.println("Un nombre entier doit être saisi");
            }
        }
    }

    // ... (helper methods like initPlayers, scanInput, nextPlayer)
}
```

### New Exception Class

```java
public class TicTacToeInvalidInputException extends Exception {}
```

### StringConstant Class

```java
public class StringConstant {
    public static final String LINE_SEPARATOR = System.lineSeparator();
    public static final String SPACE = " ";
    public static final String BLANK = "";
}
```
