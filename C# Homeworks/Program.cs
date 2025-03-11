//Make a method called AgeCalculator
//The method will have one input parameter, your birthday date
//The method should return your age
//Show the age of a user after he inputs a date

void AgeCalculator()
{
    Console.WriteLine("Enter your birthday date:");
    string bdayDateInput = Console.ReadLine();

    DateTime today = DateTime.Now;
    DateTime bdayDateInput2 = DateTime.Parse(bdayDateInput);

    int age = today.Year - bdayDateInput2.Year;

    if (today < bdayDateInput2.AddYears(age))
    {
        age--;
    }
    Console.WriteLine($"You are {age} years old! :)");
}

AgeCalculator();