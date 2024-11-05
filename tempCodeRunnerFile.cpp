#include <string>
#include <iostream>
using namespace std;
long getMaximumOperations(string s) {
    long operations = 0;
    int lastModified = -2;

    for (int i = 0; i < s.length() - 2; i++) {
        if (i <= lastModified) continue;

        // Check for "aba" pattern or "aaa" pattern
        if ((s[i] == s[i + 1] && s[i] != s[i + 2]) || 
            (s[i] == s[i + 1] && s[i] == s[i + 2])) {
            operations++;
            lastModified = i + 1;
            // Update the string (not necessary but for clarity)
            s[i + 2] = s[i];
        }
    }

    // Handle edge case: palindromic string of length 3
    if (s.length() >= 3 && s[0] == s[1] && s[0] == s[2]) {
        operations++;
    }

    return operations;
}

int main() {
    string s;
    cin >> s;

    long maxOperations = getMaximumOperations(s);
    cout << maxOperations << endl;

    return 0;
}