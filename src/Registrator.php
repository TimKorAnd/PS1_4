<?php


class Registrator
{
//    private $email;           object's fields accepting input parameters
//    private $passHash;        will create from FORM's field in constructor

    private $isSubmitted;    //array of boolean, means is submitted form with corresponding index
    private $config;
    private $formIndex;
    private $pagesData; //flow of stages pages uri
    private $fieldsArrayForSerialization=[]; //contains fields for serialization;
    private $errors;

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
        $this->config = require '../config/config.php';
        $this->formIndex = 0;           // index of current form
        $this->errors = [];
        $this->pagesData = $this->config['reg-form']['pagesData'];
        foreach($this->pagesData as $pageData) {
                foreach ($pageData['formFields'] as $fieldName => $testFunc) {
                    $this->$fieldName = '';
                    $this->fieldsArrayForSerialization[] = $fieldName;
                }
            $this->isSubmitted[] = false;
          }
       /* $this->config = '';
        unset($this->config);*/
        //$this->validator = new FormValidator();

        //GOTSessionHandler::storeinSession('user', $this);
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
     * @param $fieldName
     * @return string
     */
    public function getData($fieldName): string
    {
        return $this->$fieldName;
    }

    public function getError($fieldName): string
    {
        return $this->errors[$fieldName] ?? '';
    }

    public function getConfig(): array
    {
        return $this->config;
    }

    public function isSignedIn(): bool {
        return $this->isSubmitted[0];
    }

        /**
         * read fields from form & check is it valid,
         */
        public function sbmtForm(){
        //if ($this->isSubmitted[$this->formIndex]) return; //TODO display: have been already signed in
            //$test = $this->isValidForm();

        if (!$this->isValidForm()) return;

        GOTSessionHandler::storeinSession('user', $this);

        FileHandler::saveUser($this);// TODO check for existing json file about this user registration

        $this->isSubmitted[$this->formIndex] = true;
        $this->incPageIndex();

    }

        /**
         * @return bool
         */
        public function isValidForm(): bool
        {
            $isValid = true;
            foreach ($this->pagesData[$this->formIndex]['formFields'] as $fieldName => $testFunc) {
                $isValid = $isValid && call_user_func($testFunc, $_POST[$fieldName]) ?: false;
                //if ($test)
                if (call_user_func($testFunc, $_POST[$fieldName])) {
                    if ($fieldName === 'psw') {
                        $this->$fieldName = hash('sha256', $_POST[$fieldName]);
                    } else {
                        $this->$fieldName = $_POST[$fieldName];
                    }
                } else {
                    $this->setErrorMsg($fieldName);
                }
            }
            return $isValid;
        }

        /**
         * @param $fieldName
         */
        public function setErrorMsg($fieldName): void
        {
            $this->errors[$fieldName] = $this->config['reg-form']['errors'][$fieldName];
        }


    }