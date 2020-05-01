#include <iostream>
using namespace std;

struct BstNode {
	int data;
	BstNode* left;
	BstNode* right;
};

BstNode* rootPtr;

BstNode* GetNewNode(int data)
{
	BstNode* newNode = new BstNode();
	newNode->data = data;
	newNode->left = newNode -> right = NULL;
	return newNode;
}

void Insert(BstNode** root, int data)
{
	cout << "Inserting into BST: " << data << "...";
	if (*root == NULL)
	{
		cout << "Inserted!" << endl;
		*root = GetNewNode(data);
	}
	else if (data <= (*root)->data)
	{
		cout << "Traversing left... ";
		Insert(&(*root)->left, data);
	}
	else
	{
		cout << "Traversing right...";
		Insert(&(*root)->right, data);
	}		
}

bool Search(BstNode* root, int data)
{
	if (root == NULL) return false;
	else if (root->data == data) return true;
	else if (data <= root->data) return Search(root->left, data);
	else return Search(root->right, data);
}

int main()
{
	BstNode* root = NULL; //empty tree
	Insert(&root, 15);
	Insert(&root, 10);
	Insert(&root, 20);
	Insert(&root, 25);
	Insert(&root, 8);
	Insert(&root, 12);

	int number;
	cout << "Enter number to be searched: ";
	cin >> number;
	if(Search(root, number) == true) cout << "Found\n";
	else cout << "Not Found\n";
}
