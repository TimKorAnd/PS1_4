<?php


class Registrator
{
//    private $email;           object's fields accepting input parameters
//    private $passHash;        will create from FORM's field in constructor

        private $isSubmitted;    //array of boolean, means is submitted form with corresponding index
    private $config;
    private $formIndex;
    private $pagesData; //flow of stages pages uri
    private $fieldsArrayForSerialization=[];
    //private $validator;

    /**
     * Registrator constructor.
     * @param string $email
     * @param string $pass
     * @param bool $rememberMe
     */
    public function __construct()
    {
//        $this->email = '';            object's fields accepting input parameters
//        $this->passHash = '';         will create from FORM's field in constructor
//        $this->rememberMe = false;
        $this->config = require_once '../config/config.php';
        $this->formIndex = 0;           // index of current form
        $this->pagesData = $this->config['reg-form']['pagesData'];
        foreach($this->pagesData as $pageData) {
            foreach($pageData['formFields'] as $fieldName => $testFunc ) {
                $this->$fieldName = '';
                $this->fieldsArrayForSerialization[] = $fieldName;
            }
            $this->isSubmitted[] = false;
          }
        $this->config = '';
        unset($this->config);
        //$this->validator = new FormValidator();

        //SessionStore::storeinSession('user', $this);
    }


        public function __sleep()
        {
            return array_merge(['isSubmitted', 'formIndex', 'fieldsArrayForSerialization'], $this->fieldsArrayForSerialization);
        }

        public function __wakeup()
        {
            $this->config = require_once '../config/config.php';
            $this->pagesData = $this->config['reg-form']['pagesData'];
        }

        public function getCurrentPageData(){
        return $this->pagesData[$this->formIndex];
    }

    private function incPageIndex(){
       if($this->formIndex < count($this->pagesData)-1) {
           $this->formIndex++;
       }
    }
    /**
     * @param $dataName
     * @return string
     */
    public function getData($dataName): string
    {
        return $this->$dataName;
    }

    public function isSignedIn(): bool {
        return $this->isSubmitted[0];
    }

        /**
         * read fields from form & check is it valid,
         */
        public function sbmtForm(){
        if ($this->isSubmitted[$this->formIndex]) return; //TODO display: have been already signed in
        $test = true;
        foreach ($this->pagesData[$this->formIndex]['formFields'] as $fieldName => $testFunc){
            $test = $test && call_user_func($testFunc,$_POST[$fieldName]) ?: false;
            //if ($test)
            if(call_user_func($testFunc,$_POST[$fieldName])){
                if($fieldName === 'psw'){
                    $this->$fieldName = hash('sha256',$_POST[$fieldName]);
                } else {
                    $this->$fieldName = $_POST[$fieldName];
                }
            }
        }

        if (!$test) return;

        SessionStore::storeinSession('user', $this);
        FileHandler::saveUser();// TODO check for existing json file about this user registration

        $this->isSubmitted[$this->formIndex] = true;
        $this->incPageIndex();

    }


}