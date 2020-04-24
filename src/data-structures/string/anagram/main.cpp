#include <iostream>
#include <string>

bool ArePalindrome(std::string s1, std::string s2)
{
    // For the example, we assume all letters are minus
    int checks1[26] = {};
    int checks2[26] = {};

    for (int i = 0; i < s1.size(); i++)
        checks1[s1[i]-97]++;


    for (int j = 0; j < s2.size(); j++)
        checks2[s2[j]-97]++;

    for (int k = 0; k < 25;ad k++)
    {
        if (checks1[k] != checks2[k]) {
           return false;
        }
    }

    return true;
}

int main()
{
    std::string s1 = "decimal";
    std::string s2 = "medical";
    bool arePalindrome = ArePalindrome(s1, s2);
    std::cout << "Are palindrome? " << std::boolalpha << arePalindrome;
    return 0;
}
