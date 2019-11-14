<?php


class Registrator
{
    private $email;
    private $passHash;
    private $rememberMe;
    private $isSignedIn;
    private $config;
    private $pageIndex;
    private $pagesData; //flow of stages pages uri
    private $validator;

    /**
     * Registrator constructor.
     * @param string $email
     * @param string $pass
     * @param bool $rememberMe
     */
    public function __construct()
    {
        $this->email = '';
        $this->passHash = '';
        $this->rememberMe = false;
        $this->isSignedIn = false;
        $this->config = require_once '../config/config.php';
        $this->pageIndex = 0;
        $this->pagesData = $this->config['reg-form']['pagesData'];
        //$this->formFields = $this->config['reg-form']['pagesData']['formFields'];

        $this->validator = new FormValidator();

        //SessionStore::storeinSession('user', $this);
    }

    public function getCurrentPageData(){
        return $this->pagesData[$this->pageIndex];
    }

    private function incPageIndex(){
       if($this->pageIndex < count($this->pagesData)-1) {
           $this->pageIndex++;
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
        return $this->isSignedIn;
    }

    public function signUp($email, $pass){
        if ($this->isSignedIn) return; //TODO display: have been already signed in
        $test = true;
        foreach ($this->pagesData[$this->pageIndex]['formFields'] as $fieldName => $testFunc){
            $test = $test && call_user_func($testFunc,$$fieldName) ?: false;
            if($test){
                if($fieldName === 'psw'){
                    $this->passHash = hash('sha256',$pass);
                } else {
                    $this->$fieldName = $$fieldName;
                }
            }
        }
        //$this->passHash = $this->passHash ?? hash('sha256',$pass);
        if (!$test) return;
        /*if (!($this->validator->checkData($email, function($email){return(filter_var($email,FILTER_VALIDATE_EMAIL));}) &
          $this->validator->checkData($pass, '/^.{8,}$/' ))){
            return;
        }*/
        /*$this->email = $email;
        $this->passHash = hash('sha256',$pass);*/

        SessionStore::storeinSession('user', $this);
        FileHandler::saveUser();// TODO check for existing json file about this user registration
        $this->incPageIndex();
        $this->isSignedIn = true;

    }

    public function addUserData(){

    }

}