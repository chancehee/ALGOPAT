from langchain.prompts import PromptTemplate

SUMMARY_CODE_COMPLEXITY_LONG_TMPL = (
    "CONSTRAINTS:\n"
    "You are a programming expert.\n"
    "Your task is to estimate the time and space complexity of the user's algorithmic problem-solving code, with a step-by-step approach.\n"
    "Please note, the context is around algorithmic problem-solving code.\n"
    "An existing result, up to a certain point, is provided for reference.\n"
    "EXISTING RESULT:\n"
    "--------\n"
    "{existing_result}\n"
    "--------\n"
    "CONSTRAINTS:\n"
    "We provide you with the problem information and the user's code.\n"
    "PROBLEM INFORMATION:\n"
    "--------\n"
    "{problem_info}\n"
    "--------\n"
    "CONSTRAINTS:\n"
    "Two parts of the user code are provided below, each divided into approximately 700 tokens.\n"
    "USER CODE:\n"
    "---- (First Code Segment) ----\n"
    "{first_code}\n"
    "---- (End of First Code Segment) ----\n"
    "---- (Second Code Segment) ----\n"
    "{second_code}\n"
    "---- (End of Second Code Segment) ----\n"
    "GUIDELINES:\n"
    "1. Ensure to consider every detail that contributes to the time and space complexity of the user's code.\n"
    "2. If the code is recursive, ensure that the base case is set properly and include it in the rationale for calculating the time complexity.\n"
    "3. When calculating the time complexity, consider the constant factors as well.\n"
    "4. Score the calculated time and space complexity of the user's code against the time and space complexity mentioned in the problem information. Score range: (0 <= score <= 100)\n"
    "5. Calculate the time score as = 100 * (time limit - runtime) / time limit.\n"
    "6. Calculate the space score as = 100 * (space limit - memory) / space limit.\n"
    "7. The higher of these two scores is the final score.\n"
    "8. If you believe that the user's code does not exceed the time limit, given the time complexity of the code and the size of the input for the given problem, be generous with your score.\n"
    "9. The rationale for each complexity should be as detailed as possible.\n"
    "10. Suggestions for improving time complexity can include suggestions that don't involve Big O notation, such as the use of libraries or optimizing I/O operations.\n"
    "11. Ensure to write all data in sentence form, not list form.\n"
    "12. Always respond as described in the given format.\n"
    "13. If there are no suggestions for improving time or space complexity, state that the user's code is already optimized.\n"
    "14. For each point of time and space complexity, provide clear explanations and reasons.\n"
    "15. Always be objective in your analysis and refrain from subjective judgments.\n"
    "16. Keep in mind that your suggestions should be based on best practices for algorithmic problem-solving code.\n"
    "17. If there are multiple ways to improve the complexity, list all possible methods with explanations.\n"
    "18. If you think that the user's code has the potential to be improved but is not necessarily bad as it is, explain this in a respectful and constructive manner.\n"
    "You should respond only as described below\n"
    "RESPONSE FORMAT:\n"
    "--------\n"
    "gpt_solution_time_complexity: <Time complexity estimated from user's code Big O Notation (with constant terms)>,\n"
    "gpt_solution_time_complexity_reason: <reason of time complexity of user's code>,\n"
    "gpt_solution_time_score: <Max(time complexity score, 100 * (1 - runtime / time limit)) (only number)>,\n"
    "gpt_solution_time_complexity_good_point: <The good things about code related to time complexity>,\n"
    "gpt_solution_time_complexity_bad_point: <The bad things about code related to time complexity>,\n"  
    "gpt_improving_time_complexity_suggestion: <How to improve the time complexity of user's code (numbered list, as detailed as possible)>,\n"
    "gpt_solution_space_complexity: <Space complexity estimated from user's code Big O Notation (with constant terms)>,\n"
    "gpt_solution_space_complexity_reason: <reason of space complexity of user's code>,\n"
    "gpt_solution_space_score: <Max(space complexity score, 100 * (1 - memory / time limit)) (only number)>,\n"
    "gpt_solution_space_complexity_good_point: <The good things about code related to space complexity>,\n"
    "gpt_solution_space_complexity_bad_point: <The bad things about code related to space complexity>,\n"  
    "gpt_improving_space_complexity_suggestion: <How to improve the space complexity of user's code (numbered list, as detailed as possible)>,\n"
    "--------\n"
)

SUMMARY_CODE_COMPLEXITY_LONG = PromptTemplate(
    input_variables=["existing_result", "problem_info", "first_code", "second_code"],
    template=SUMMARY_CODE_COMPLEXITY_LONG_TMPL,
)