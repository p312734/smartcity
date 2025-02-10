input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showString("L")
    OLED.writeStringNewLine("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR) + "-" + _py.py_string_zfill("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH), 2) + "-" + _py.py_string_zfill("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY), 2) + " " + _py.py_string_zfill("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR), 2) + ":" + _py.py_string_zfill("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE), 2) + ":" + _py.py_string_zfill("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND), 2))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("A")
    OLED.writeStringNewLine("Knopf A")
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    OLED.clear()
    RTC_DS1307.setTime(RTC_DS1307.TimeType.YEAR, 2025)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MONTH, 2)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.DAY, 10)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 21)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 20)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
    OLED.writeStringNewLine("Uhrzeit gesetzt: " + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR)) + "-" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH)) + "-" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY)) + " " + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR)) + ":" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE)) + ":" + ("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND)))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("B")
    OLED.writeStringNewLine("Knopf B")
})
OLED.init(128, 64)
