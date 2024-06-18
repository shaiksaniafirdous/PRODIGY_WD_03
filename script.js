document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    const board = Array(9).fill(null);

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    };

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.getAttribute('data-index');
            if (!board[index]) {
                board[index] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWin()) {
                    alert(`${currentPlayer} wins!`);
                    cells.forEach(cell => cell.textContent = '');
                    board.fill(null);
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
                
            
            }
           
        });
    });
});
