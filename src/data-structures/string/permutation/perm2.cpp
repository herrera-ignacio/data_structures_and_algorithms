#include <iostream>
#include <string>

void swapChars(std::string &s, int i, int j)
{
	auto temp = s[i];
	s[i] = s[j];
	s[j] = temp;
}

void PrintPermutations(std::string &s, int low, int high)
{
	if (low == high)
	{
		std::cout << s << std::endl;
	}
	else
	{
		int i;
		for (i = low; i < s.size(); i++)
		{
			swapChars(s, i, low); // swap ith char with (low)th char
			PrintPermutations(s, low+1, high);
			swapChars(s, i, low); // once tree's branch is done, reverse change
		}
	}
}

int main()
{
	std::string test = "ABC";
	PrintPermutations(test, 0, test.size());
	return 0;
}
