<?php

//#0 intro test
function multiply($a, $b)
{
  return $a * $b;
} 

//#2 remove-first-and-last-character
function remove_char(string $s): string {
  return substr($s,1,-1); 
}