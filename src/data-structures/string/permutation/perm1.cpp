#include <iostream>
#include <string>
#include <vector>

void PrintPermutations(std::string s, int k)
{
	static std::vector<int> checks(s.size(), 0);
	static std::string res(s.size(), 'x');

	if (k == s.size())
	{
		std::cout << res << std::endl; 
	}
	else
	{
		for (int i = 0; i < s.size(); i++)
		{
			if (checks[i] == 0)
			{
				res[k] = s[i]; 
				checks[i] = 1; // We mark the letter as used in the permutation
				PrintPermutations(s, k+1); // Keep traversing the tree
				checks[i] = 0; // Letter is available again
			}
		}
	}

}

int main()
{
	std::string test = "ABC";
	PrintPermutations(test, 0);
	return 0;
}
