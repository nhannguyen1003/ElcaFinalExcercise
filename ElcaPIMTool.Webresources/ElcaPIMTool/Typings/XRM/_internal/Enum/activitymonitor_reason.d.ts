declare const enum activitymonitor_reason {
  _EmptyString = 0,
  Unabletofindthesourcedataforthisemail = 1,
  Anexistingentityisalreadyconnectedwiththisrecord = 2,
  Anactivecaseisalreadyconnectedwiththisrecord = 3,
  Aresolvedcaseisalreadyconnectedwiththisrecord = 4,
  TherulerequiresaconnectedcasetoberesolvedforaspecificamountoftimebeforecreatinganewoneThisconnectedcasehasbeenresolvedforlessthantheamountoftimeselected = 5,
  Noemailsenderisfound = 6,
  Emailiscomingfromanunknownsender = 7,
  _EmptyString_2 = 8,
  AcontactwasnotcreatedforthissenderThiscanbethattheruleownerdoesnthavepermissiontocreatecontacts = 9,
  NovalidentitlementforthisemailsenderTherulecontinuedwithanyadditionalactionselectedbutskippedtheprimaryactionforthisemailsender = 10,
  Novalidentitlementforthisemailsender = 11,
  _EmptyString_3 = 12,
  Theruledoesnthaveanyconditionsapplicabletotherecord = 13,
}
