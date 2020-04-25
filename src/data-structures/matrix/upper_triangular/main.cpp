#include <iostream>

class HigherTri
{
	private:
		int *A;
		int n;
	public:
		HigherTri()
		{
			n = 2;
			A = new int[2 * (2+1) / 2];
		}
		HigherTri(int n)
		{
			this->n = n;
			A = new int[n * (n+1) / 2];
		}
		~HigherTri()
		{
			delete []A;
		}
		int GetDimension() { return n; }
		void Set(int i, int j, int x);
		int Get(int i, int j);
		void Display();
};

void HigherTri::Set(int i, int j, int x)
{
	if (i <= j)
		A[(i-1) * n - (i-2) * (i-1) / 2 + (j - i)] = x;

}
int HigherTri::Get(int i, int j)
{
	if (i <= j)
		return A[(i-1) * n - (i-2) * (i-1) / 2 + (j - i)];
	return 0;
}

void HigherTri::Display()
{
	for (int i = 1; i <= n; i ++)
	{
		for (int j = 1; j <= n; j++)
		{
			if (i <= j)
				std::cout << A[(i-1) * n - (i-2) * (i-1) / 2 + (j - i)] << " ";
			else
				std::cout << "0 ";
		}
		std::cout << std::endl;
	}
}

int main()
{
	int d;
	std::cout << "Enter Dimensions:";
	std::cin >> d;

	HigherTri lm(d);

	int x;
	std::cout << "Enter elements:";
	for (int i = 1; i <= d; i++)
	{
		for (int j = 1; j <= d; j++)
		{
			std::cin >> x;
			lm.Set(i, j, x);
		}
	}

	lm.Display();
	
	return 0;
}

