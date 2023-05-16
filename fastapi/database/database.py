from myclass.problem import ProblemData
import database.problem as db_problem
from database.problem import UserSubmitProblem, UserSubmitSolution, GPTSolution
from database.get_session import get_session
from logging import getLogger
from utils.utils import parse_date_format
from my_exception.exception import MyCustomError 
from datetime import datetime
# logger 설정 
logger = getLogger()

async def save_problem_origin(problem_id : int, data : ProblemData):
    logger.info("문제 존재 여부 확인")
    async with get_session() as session:
        if await db_problem.check_problem_is_exist(problem_id, session) == False:
            logger.info("문제 DB 저장")
            await db_problem.insert_problem(data, session)

async def update_problem_meta(problem_id : int, user_seq : int, data : ProblemData, session):
    logger.info("문제 메타데이터 DB 업데이트")
    await db_problem.update_problem_meta(problem_id, user_seq, data, session)

async def save_problem_summary(problem_id : int, summary_json):
    logger.info("GPT 문제 요약 존재 여부 확인")
    async with get_session() as session:
        if await db_problem.check_gpt_problem_summary_is_exist(problem_id, session) == False:
            logger.info("GPT 문제 요약 DB 저장")
            print(summary_json)
            print(type(summary_json))
            await db_problem.insert_gpt_problem_summary(summary_json, session)

async def save_user_problem_origin(problem_id : int, user_seq : int, submissionTime : datetime, session):
    logger.info("회원 푼 문제 불러오기")
    userSubmitProblemData = await db_problem.get_user_submit_problem(problem_id, user_seq, session)   
    if userSubmitProblemData is None:    
        userSubmitProblemData = UserSubmitProblem(
            problem_id = problem_id,
            user_seq = user_seq 
        )
        logger.info("회원 푼 문제 DB 저장")
        userSubmitProblemData = await db_problem.insert_user_submit_problem(userSubmitProblemData, user_seq, submissionTime, session)
    else:
        logger.info("회원 푼 문제 존재")
        # 최근 제출 일자 업데이트 Logic
        userSubmitProblemData = await db_problem.update_user_submit_problem(userSubmitProblemData, submissionTime, session)

    return userSubmitProblemData

async def check_gpt_problem_summary_is_exist(problem_id : int):
    async with get_session() as session:
        return await db_problem.check_gpt_problem_summary_is_exist(problem_id, session)

async def get_gpt_problem_summary(problem_id : int):
    async with get_session() as session:
        return await db_problem.get_gpt_problem_summary(problem_id, session)

async def save_user_submit_solution_origin(problem_id : int, user_seq : int, user_submit_problem_seq : int, data : ProblemData, session):
    logger.info("회원 제출 코드 DB 접근")
    
    # origin_date_format = "%Y년 %m월 %d일 %H:%M:%S"
    # date_format = "%Y-%m-%d %H:%M:%S"
    

    # 같은 submission_id로 제출한 적이 있는지 체크 
    if await db_problem.check_user_submit_solution_is_exist(data.submissionId, session) == False:
        ### 회원 제출 코드 DB 접근 ### 
        UserSubmitSolutionData = UserSubmitSolution(
            submission_id = data.submissionId,
            problem_id = problem_id,
            user_seq = user_seq,
            user_submit_solution_time = await parse_date_format(data.submissionTime), 
            user_submit_solution_result = data.result,
            user_submit_solution_result_category = data.resultCategory,
            user_submit_solution_language = data.language,
            user_submit_solution_code = data.code,
            user_submit_solution_runtime = data.runtime,
            user_submit_solution_memory = data.memory,
            user_submit_solution_code_length = data.codeLength,
            user_submit_problem_seq = user_submit_problem_seq
        )
        logger.info("회원 제출 코드 DB 저장")
        submission_id = await db_problem.insert_user_submit_solution(UserSubmitSolutionData, user_seq, session)
        return submission_id
    else:
        logger.info("회원 제출 코드 중복")
        raise MyCustomError("회원 제출 코드 중복")



async def save_gpt_solution(submission_id : int, user_seq : int,  result, session):
    logger.info("GPT평가 DB 접근")

    GPTSolutionData = GPTSolution(
        submission_id = submission_id,
        user_seq = user_seq,
        gpt_solution_time_complexity = result.gpt_solution_time_complexity,
        gpt_solution_time_complexity_reason = result.gpt_solution_time_complexity_reason,
        gpt_solution_time_score = result.gpt_solution_time_score,
        gpt_solution_time_complexity_good_point = result.gpt_solution_time_complexity_good_point,
        gpt_solution_time_complexity_bad_point = result.gpt_solution_time_complexity_bad_point,
        gpt_improving_time_complexity_suggestion = result.gpt_improving_time_complexity_suggestion,
        gpt_solution_space_complexity = result.gpt_solution_space_complexity,
        gpt_solution_space_complexity_reason = result.gpt_solution_space_complexity_reason,
        gpt_solution_space_score = result.gpt_solution_space_score,
        gpt_solution_space_complexity_good_point = result.gpt_solution_space_complexity_good_point,
        gpt_solution_space_complexity_bad_point = result.gpt_solution_space_complexity_bad_point,
        gpt_improving_space_complexity_suggestion = result.gpt_improving_space_complexity_suggestion,
        gpt_solution_clean_score = result.gpt_solution_clean_score,
        gpt_solution_refactoring_suggestion = result.gpt_solution_refactoring_suggestion,
        gpt_total_score = result.total_score
    )
    logger.info("GPT평가 DB 저장")
    await db_problem.insert_gpt_solution(GPTSolutionData, user_seq, session)