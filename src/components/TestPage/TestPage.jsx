import { useDispatch } from 'react-redux';

import { getAllTest } from '../../redux/tetstOperaion';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import sprite from '../../images/sprite.svg';

function Test() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('name');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTest(query));
  }, [dispatch]);

  return (
    <div className="container bgColorTest">
      <div className="flexContainer">
        <p className="nameOfTest">[ Testing theory_]</p>
        <button className="btnThirdTest">Finish test</button>
      </div>
      <form className="formOfQuestionTest">
        <p>Question 3 / 12 </p>
        <p>What is regression testing?</p>

        {/* {questions && questions.map(question => (<ul key={question.id}>
          <li>
            question.SOMETEXT
          </li>
        </ul>))} */}
      </form>
      <div className="btnsBlockTest">
        <button className="btnPrimaryTest">
          <svg className="markerPrimaryTest">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
          <p className="textPrimaryBtnTest">Previous question</p>
        </button>
        <button className="btnSecondaryTest">
          <p className="textSecondaryBtnTest">Next question</p>
          <svg className="markerSecondaryTest">
            <use href={sprite + '#arrowLeft'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Test;
