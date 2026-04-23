// Toggle Hamburger Menu
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const body = document.body;

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  body.classList.toggle("menu-open");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const navbarHeader = document.querySelector(".navbar-header");
  const body = document.body;

  if (
    !navbarHeader.contains(event.target) &&
    navMenu.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

// Close menu when pressing Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.querySelector(".hamburger");
    const body = document.body;

    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      body.classList.remove("menu-open");
    }
  }
});

function checkLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("loginError");
  const welcomeMsg = document.getElementById("welcomeMsg");
  const rememberCheck = document.getElementById("rememberMe");

  if (username === "" || password === "") {
    errorMsg.style.display = "block";
    welcomeMsg.style.display = "none";
    const loginBox = document.querySelector(".login-box");
    loginBox.style.animation = "shake 0.3s ease";
    setTimeout(() => {
      loginBox.style.animation = "";
    }, 300);
    return;
  }

  errorMsg.style.display = "none";

  if (rememberCheck.checked) {
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("rememberMe", "true");
  } else {
    localStorage.removeItem("savedUsername");
    localStorage.removeItem("rememberMe");
  }

  welcomeMsg.style.display = "block";
  welcomeMsg.textContent = `✨ Welcome ${username}! Redirecting...`;

  setTimeout(() => {
    document.getElementById("loginScreen").style.display = "none";
    localStorage.setItem("username", username);
  }, 1500);
}

function forgotPassword() {
  alert("🔐 Please contact your administrator to reset your password.");
}

function signupAlert() {
  alert("📝 Sign up feature will be available soon!");
}

function showInfographic(moduleKey = "module1") {
  const modal = document.getElementById(`infographicModal-${moduleKey}`);
  const bulb = document.getElementById(`bulb-${moduleKey}-infographic`);

  if (!modal || !bulb) return;

  bulb.style.filter = "none";
  bulb.style.opacity = "1";
  bulb.style.boxShadow = "0 0 25px gold";
  bulb.style.transform = "scale(0.95)";
  setTimeout(() => {
    bulb.style.transform = "scale(1)";
  }, 200);

  modal.style.display = "flex";
}

function closeModal() {
  document.querySelectorAll('[id^="infographicModal-"]').forEach((modal) => {
    modal.style.display = "none";
  });
  document
    .querySelectorAll('[id$="-infographic"]')
    .forEach((bulb) => (bulb.style.boxShadow = "none"));
}

function toggleAudio(iconEl) {
  const scope =
    iconEl?.closest("section") || iconEl?.closest(".content-text") || document;
  const audio = scope.querySelector(".answer-audio");
  const audioIconEmoji = iconEl?.querySelector(".audio-icon-emoji");
  const audioStatus = scope.querySelector(".audio-status");

  if (!audio || !audioIconEmoji || !audioStatus || !iconEl) return;
  const audioBase = iconEl.querySelector("div:first-child");
  const isPlaying = iconEl.dataset.playing === "true";

  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0;
    iconEl.dataset.playing = "false";
    audioIconEmoji.innerHTML = "🎧";
    audioStatus.innerHTML = "🔊 اضغط للاستماع للإجابة";
    audioStatus.style.color = "#667eea";
    if (audioBase) {
      audioBase.style.background = "linear-gradient(145deg, #667eea, #764ba2)";
    }
  } else {
    audio
      .play()
      .then(() => {
        iconEl.dataset.playing = "true";
        audioIconEmoji.innerHTML = "🔊";
        audioStatus.innerHTML = "⏸️ جاري التشغيل... اضغط للإيقاف";
        audioStatus.style.color = "#e6a017";
        if (audioBase) {
          audioBase.style.background =
            "linear-gradient(145deg, #e6a017, #f3b33d)";
        }
      })
      .catch(function (error) {
        console.log("خطأ في التشغيل:", error);
        audioStatus.innerHTML = "⚠️ لم يتم العثور على ملف الصوت";
        audioStatus.style.color = "#e53e3e";
        setTimeout(() => {
          if (iconEl.dataset.playing !== "true") {
            audioStatus.innerHTML = "🔊 اضغط للاستماع للإجابة";
            audioStatus.style.color = "#667eea";
          }
        }, 2000);
      });

    audio.onended = () => {
      iconEl.dataset.playing = "false";
      audioIconEmoji.innerHTML = "🎧";
      audioStatus.innerHTML = "🔊 اضغط للاستماع للإجابة";
      audioStatus.style.color = "#667eea";
      if (audioBase) {
        audioBase.style.background =
          "linear-gradient(145deg, #667eea, #764ba2)";
      }
    };
  }
}

function showQuestion(icon) {
  const scope =
    icon?.closest("section") || icon?.closest(".content-text") || document;
  const modal = scope.querySelector(".question-modal");
  if (!modal || !icon) return;

  // تأثير عند الضغط
  icon.style.transform = "scale(0.95)";
  setTimeout(() => {
    icon.style.transform = "";
  }, 150);

  modal.style.display = "flex";
}

function closeQuestionModal() {
  document.querySelectorAll(".question-modal").forEach((modal) => {
    modal.style.display = "none";
  });
}

function toggleHintModule1() {
  const hint = document.getElementById("module1-hint");
  const bulb = document.getElementById("bulb-module1");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.6";
    bulb.style.boxShadow = "none";
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 25px gold";
  }
}

function showModule2Video() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("module2Video");

  modal.style.display = "flex";
  video.play();
}

function showModule5Video() {
  const modal = document.getElementById("videoModal5");
  const video = document.getElementById("module5Video");

  if (!modal || !video) return;
  modal.style.display = "flex";
  video.play();
}

function showModule3SummaryVideo() {
  const modal = document.getElementById("videoModal3");
  const video = document.getElementById("module3SummaryVideo");

  if (!modal || !video) return;
  modal.style.display = "flex";
  video.play();
}

function showModule6SummaryVideo() {
  const modal = document.getElementById("videoModal6");
  const video = document.getElementById("module6SummaryVideo");

  if (!modal || !video) return;
  modal.style.display = "flex";
  video.play();
}

function toggleHintModule2() {
  const hint = document.getElementById("module2-hint");
  const bulb = document.getElementById("bulb-module2");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.6";
    bulb.style.boxShadow = "none";
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 25px gold";
  }
}

function toggleHintModule3() {
  const hint = document.getElementById("module3-hint");
  const bulb = document.getElementById("bulb-module3");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.6";
    bulb.style.boxShadow = "none";
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 25px gold";
  }
}

function toggleHintModule4() {
  const hint = document.getElementById("module4-hint");
  const bulb = document.getElementById("bulb-module4");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.6";
    bulb.style.boxShadow = "none";
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 25px gold";
  }
}

function toggleHintModule5() {
  const hint = document.getElementById("module5-hint");
  const bulb = document.getElementById("bulb-module5");
  if (!hint || !bulb) return;

  if (hint.style.display === "block") {
    hint.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.6";
    bulb.style.boxShadow = "none";
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 25px gold";
  }
}

function toggleHintModule6() {
  const hint = document.getElementById("module6-hint");
  const bulb = document.getElementById("bulb-module6");
  if (!hint || !bulb) return;

  if (hint.style.display === "block") {
    hint.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.6";
    bulb.style.boxShadow = "none";
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 25px gold";
  }
}

function toggleHashcatInfo() {
  const infoDiv = document.getElementById("hashcat-info");
  const hintDiv = document.getElementById("hashcat-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    hintDiv.style.display = "none";
    resetBulb();
  } else {
    infoDiv.style.display = "block";
    hintDiv.style.display = "none";
    resetBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية
function toggleHashcatHint() {
  const hintDiv = document.getElementById("hashcat-hint");
  const bulb = document.getElementById("bulb-hashcat");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #ffd700";
  }
}

// دالة لإعادة ضبط حالة اللمبة
function resetBulb() {
  const bulb = document.getElementById("bulb-hashcat");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ Wireshark
function toggleWiresharkInfo() {
  const infoDiv = document.getElementById("wireshark-info");
  const hintDiv = document.getElementById("wireshark-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetWiresharkBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetWiresharkBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ Wireshark
function toggleWiresharkHint() {
  const hintDiv = document.getElementById("wireshark-hint");
  const bulb = document.getElementById("bulb-wireshark");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ Wireshark
function resetWiresharkBulb() {
  const bulb = document.getElementById("bulb-wireshark");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ OpenVAS
function toggleOpenVASInfo() {
  const infoDiv = document.getElementById("openvas-info");
  const hintDiv = document.getElementById("openvas-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetOpenVASBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetOpenVASBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ OpenVAS
function toggleOpenVASHint() {
  const hintDiv = document.getElementById("openvas-hint");
  const bulb = document.getElementById("bulb-openvas");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ OpenVAS
function resetOpenVASBulb() {
  const bulb = document.getElementById("bulb-openvas");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ Nessus
function toggleNessusInfo() {
  const infoDiv = document.getElementById("nessus-info");
  const hintDiv = document.getElementById("nessus-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetNessusBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetNessusBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ Nessus
function toggleNessusHint() {
  const hintDiv = document.getElementById("nessus-hint");
  const bulb = document.getElementById("bulb-nessus");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ Nessus
function resetNessusBulb() {
  const bulb = document.getElementById("bulb-nessus");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ AlienVault
function toggleAlienVaultInfo() {
  const infoDiv = document.getElementById("alienvault-info");
  const hintDiv = document.getElementById("alienvault-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetAlienVaultBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetAlienVaultBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ AlienVault
function toggleAlienVaultHint() {
  const hintDiv = document.getElementById("alienvault-hint");
  const bulb = document.getElementById("bulb-alienvault");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ AlienVault
function resetAlienVaultBulb() {
  const bulb = document.getElementById("bulb-alienvault");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ Metasploit
function toggleMetasploitInfo() {
  const infoDiv = document.getElementById("metasploit-info");
  const hintDiv = document.getElementById("metasploit-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetMetasploitBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetMetasploitBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ Metasploit
function toggleMetasploitHint() {
  const hintDiv = document.getElementById("metasploit-hint");
  const bulb = document.getElementById("bulb-metasploit");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ Metasploit
function resetMetasploitBulb() {
  const bulb = document.getElementById("bulb-metasploit");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ Burp Suite
function toggleBurpInfo() {
  const infoDiv = document.getElementById("burp-info");
  const hintDiv = document.getElementById("burp-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetBurpBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetBurpBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ Burp Suite
function toggleBurpHint() {
  const hintDiv = document.getElementById("burp-hint");
  const bulb = document.getElementById("bulb-burp");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ Burp Suite
function resetBurpBulb() {
  const bulb = document.getElementById("bulb-burp");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ Splunk
function toggleSplunkInfo() {
  const infoDiv = document.getElementById("splunk-info");
  const hintDiv = document.getElementById("splunk-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetSplunkBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetSplunkBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ Splunk
function toggleSplunkHint() {
  const hintDiv = document.getElementById("splunk-hint");
  const bulb = document.getElementById("bulb-splunk");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ Splunk
function resetSplunkBulb() {
  const bulb = document.getElementById("bulb-splunk");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ Kali Linux
function toggleKaliInfo() {
  const infoDiv = document.getElementById("kali-info");
  const hintDiv = document.getElementById("kali-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetKaliBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetKaliBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ Kali Linux
function toggleKaliHint() {
  const hintDiv = document.getElementById("kali-hint");
  const bulb = document.getElementById("bulb-kali");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ Kali Linux
function resetKaliBulb() {
  const bulb = document.getElementById("bulb-kali");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ FortiGate
function toggleFortiGateInfo() {
  const infoDiv = document.getElementById("fortigate-info");
  const hintDiv = document.getElementById("fortigate-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetFortiGateBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetFortiGateBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ FortiGate
function toggleFortiGateHint() {
  const hintDiv = document.getElementById("fortigate-hint");
  const bulb = document.getElementById("bulb-fortigate");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ FortiGate
function resetFortiGateBulb() {
  const bulb = document.getElementById("bulb-fortigate");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

// دالة لعرض/إخفاء معلومات الأداة الأساسية لـ CrowdStrike
function toggleCrowdStrikeInfo() {
  const infoDiv = document.getElementById("crowdstrike-info");
  const hintDiv = document.getElementById("crowdstrike-hint");

  if (infoDiv.style.display === "block") {
    infoDiv.style.display = "none";
    // إخفاء التلميحة أيضًا عند إغلاق المعلومات
    hintDiv.style.display = "none";
    resetCrowdStrikeBulb();
  } else {
    infoDiv.style.display = "block";
    // التأكد من إغلاق التلميحة عند فتح المعلومات
    hintDiv.style.display = "none";
    resetCrowdStrikeBulb();
  }
}

// دالة لعرض/إخفاء التلميحة الإلكترونية لـ CrowdStrike
function toggleCrowdStrikeHint() {
  const hintDiv = document.getElementById("crowdstrike-hint");
  const bulb = document.getElementById("bulb-crowdstrike");

  if (hintDiv.style.display === "block") {
    hintDiv.style.display = "none";
    bulb.style.filter = "grayscale(100%)";
    bulb.style.opacity = "0.7";
    bulb.style.transform = "scale(1)";
    bulb.style.boxShadow = "none";
  } else {
    hintDiv.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.transform = "scale(1.1)";
    bulb.style.boxShadow = "0 0 20px #64b5f6";
  }
}

// دالة لإعادة ضبط حالة اللمبة لـ CrowdStrike
function resetCrowdStrikeBulb() {
  const bulb = document.getElementById("bulb-crowdstrike");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.transform = "scale(1)";
  bulb.style.boxShadow = "none";
}

function toggleFireEyeInfo() {
  const info = document.getElementById("fireeye-info");
  const hint = document.getElementById("fireeye-hint");
  info.style.display = info.style.display === "block" ? "none" : "block";
  hint.style.display = "none";
  resetFireEyeBulb();
}

function toggleFireEyeHint() {
  const hint = document.getElementById("fireeye-hint");
  const bulb = document.getElementById("bulb-fireeye");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    resetFireEyeBulb();
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 15px #64b5f6";
  }
}

function resetFireEyeBulb() {
  const bulb = document.getElementById("bulb-fireeye");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.boxShadow = "none";
}

function toggleZapInfo() {
  const info = document.getElementById("zap-info");
  const hint = document.getElementById("zap-hint");
  info.style.display = info.style.display === "block" ? "none" : "block";
  hint.style.display = "none";
  resetZapBulb();
}

function toggleZapHint() {
  const hint = document.getElementById("zap-hint");
  const bulb = document.getElementById("bulb-zap");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    resetZapBulb();
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 15px #64b5f6";
  }
}

function resetZapBulb() {
  const bulb = document.getElementById("bulb-zap");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.boxShadow = "none";
}

function toggleJohnInfo() {
  const info = document.getElementById("john-info");
  const hint = document.getElementById("john-hint");
  info.style.display = info.style.display === "block" ? "none" : "block";
  hint.style.display = "none";
  resetJohnBulb();
}

function toggleJohnHint() {
  const hint = document.getElementById("john-hint");
  const bulb = document.getElementById("bulb-john");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    resetJohnBulb();
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 15px #64b5f6";
  }
}

function resetJohnBulb() {
  const bulb = document.getElementById("bulb-john");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.boxShadow = "none";
}

function toggleSnortInfo() {
  const info = document.getElementById("snort-info");
  const hint = document.getElementById("snort-hint");
  info.style.display = info.style.display === "block" ? "none" : "block";
  hint.style.display = "none";
  resetSnortBulb();
}

function toggleSnortHint() {
  const hint = document.getElementById("snort-hint");
  const bulb = document.getElementById("bulb-snort");

  if (hint.style.display === "block") {
    hint.style.display = "none";
    resetSnortBulb();
  } else {
    hint.style.display = "block";
    bulb.style.filter = "none";
    bulb.style.opacity = "1";
    bulb.style.boxShadow = "0 0 15px #64b5f6";
  }
}

function resetSnortBulb() {
  const bulb = document.getElementById("bulb-snort");
  bulb.style.filter = "grayscale(100%)";
  bulb.style.opacity = "0.7";
  bulb.style.boxShadow = "none";
}

// Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  const themeToggleIcon = document.querySelector(".theme-toggle i");

  if (body.classList.contains("light-mode")) {
    // Switch to Dark Mode
    body.classList.remove("light-mode");
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    // Switch to Light Mode
    body.classList.add("light-mode");
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeToggleIcon = document.querySelector(".theme-toggle i");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun");
  } else {
    document.body.classList.remove("light-mode");
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon");
  }
}

// Section Navigation Functions
function showSection(id, el) {
  // Hide all sections
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));

  // Show the selected section
  const section = document.getElementById(id);
  if (section) {
    section.classList.add("active");
  }

  // Update navbar active state
  document
    .querySelectorAll(".navbar a")
    .forEach((a) => a.classList.remove("active"));
  if (el) {
    el.classList.add("active");
  } else {
    // Find the corresponding navbar link and activate it
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
      if (link.getAttribute("onclick")?.includes(`'${id}'`)) {
        link.classList.add("active");
      }
    });
  }

  // Scroll to top when changing sections
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update progress
  updateProgress();
}

function showModule1() {
  showSection("module1", document.querySelector(".navbar a:nth-child(4)"));
}
function showModule2() {
  showSection("module2", document.querySelector(".navbar a:nth-child(4)"));
}
function showModule3() {
  showSection("module3", document.querySelector(".navbar a:nth-child(4)"));
}
function showModule4() {
  showSection("module4", document.querySelector(".navbar a:nth-child(4)"));
}
function showModule5() {
  showSection("module5", document.querySelector(".navbar a:nth-child(4)"));
}
function showModule6() {
  showSection("module6", document.querySelector(".navbar a:nth-child(4)"));
}

function goToModule1Exam() {
  showExamForModule(1);
}

// دالة لعرض صفحة الاختبارات الرئيسية
function showExams() {
  showSection("exams", document.querySelector(".navbar a:nth-child(5)"));
}

// دالة لعرض صفحة الأدوات
function showTools() {
  showSection("tools", document.querySelector(".navbar a:nth-child(6)"));
}

// دالة لعرض اختبار معين
function showExamForModule(moduleNumber) {
  showSection(
    "module" + moduleNumber + "-exam",
    document.querySelector(".navbar a:nth-child(5)"),
  );
}

// دالة لتقييم اختبارات الموديولات
function submitModuleExam(moduleNumber) {
  let score = 0;
  const correctAnswers = {
    1: { q1: "c", q2: "b", q3: "a", q4: "b", q5: "b" },
    2: { m2q1: "a", m2q2: "a", m2q3: "b", m2q4: "b", m2q5: "a" },
    3: { m3q1: "b", m3q2: "a", m3q3: "a", m3q4: "b", m3q5: "a" },
    4: { m4q1: "a", m4q2: "a", m4q3: "a", m4q4: "a", m4q5: "a" },
    5: { m5q1: "a", m5q2: "a", m5q3: "a", m5q4: "a", m5q5: "a" },
    6: { m6q1: "a", m6q2: "a", m6q3: "a", m6q4: "a", m6q5: "a" },
  };

  const moduleAnswers = correctAnswers[moduleNumber];

  for (let q in moduleAnswers) {
    let selected = document.querySelector('input[name="' + q + '"]:checked');
    if (selected && selected.value === moduleAnswers[q]) score++;
  }

  const resultElement = document.getElementById(
    "module" + moduleNumber + "-result",
  );
  const percentage = (score / 5) * 100;

  let message = "نتيجتك: " + score + " / 5 (" + percentage + "%)";

  if (percentage >= 80) {
    message += " 🎉 ممتاز! لديك فهم قوي للموديول";
  } else if (percentage >= 60) {
    message += " 👍 جيد، لكن يمكنك المراجعة مرة أخرى";
  } else {
    message += " 📚 يفضل مراجعة الموديول مرة أخرى";
  }

  resultElement.innerHTML = message;
  resultElement.style.color = percentage >= 60 ? "#4caf50" : "#ff4757";

  // Save exam result
  localStorage.setItem("exam_" + moduleNumber, score);
  updateProgress();

  // إظهار زر للعودة إلى صفحة الاختبارات
  if (!document.querySelector("#back-to-exams-" + moduleNumber)) {
    const backButton = document.createElement("div");
    backButton.id = "back-to-exams-" + moduleNumber;
    backButton.style.textAlign = "center";
    backButton.style.marginTop = "20px";
    backButton.innerHTML =
      '<button class="btn btn-secondary" onclick="showExams()">العودة إلى جميع الاختبارات</button>';
    resultElement.parentNode.appendChild(backButton);
  }
}

// Tool Info Toggle
function toggleToolInfo(toolId) {
  const toolInfo = document.getElementById(toolId + "-info");
  const isActive = toolInfo.classList.contains("active");

  // Close all other tool info
  document.querySelectorAll(".tool-info.active").forEach((info) => {
    if (info.id !== toolId + "-info") {
      info.classList.remove("active");
    }
  });

  // Toggle current tool info
  if (isActive) {
    toolInfo.classList.remove("active");
  } else {
    toolInfo.classList.add("active");
    toolInfo.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// Hint Toggle Function - NEW FUNCTION
function toggleHint(hintId) {
  const hintContent = document.getElementById(hintId);
  const isActive = hintContent.classList.contains("active");

  // Close all other hints
  document.querySelectorAll(".hint-content.active").forEach((hint) => {
    if (hint.id !== hintId) {
      hint.classList.remove("active");
    }
  });

  // Toggle current hint
  if (isActive) {
    hintContent.classList.remove("active");
  } else {
    hintContent.classList.add("active");
    hintContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleChat() {
  let win = document.getElementById("chatbot-window");
  win.style.display = win.style.display === "block" ? "none" : "block";
}
function aiSmartCheck() {
  let url = document.getElementById("aiUrlInput").value.trim();
  let report = document.getElementById("aiUrlReport");

  if (!url) {
    report.innerHTML =
      "<span style='color:#d9534f;'>❗ برجاء إدخال رابط</span>";
    return;
  }

  let score = 0;
  let notes = [];

  // استخراج الدومين
  let domain = url.replace("https://", "").replace("http://", "").split("/")[0];

  // 1) HTTPS
  if (url.startsWith("https://")) {
    notes.push("✔ الاتصال آمن (HTTPS)");
  } else {
    notes.push("❌ لا يستخدم HTTPS — قد يكون خطر.");
    score += 3;
  }

  // 2) كلمات مشبوهة
  let riskyWords =
    /(login|verify|update|bank|secure|free|bonus|gift|password)/i;
  if (riskyWords.test(url)) {
    notes.push("⚠ يحتوي على كلمات حساسة تُستخدم في صفحات الاحتيال.");
    score += 2;
  }

  // 3) روابط مختصرة
  let shorteners = /(bit\.ly|t\.co|tinyurl|cutt\.ly|goo\.gl)/i;
  if (shorteners.test(url)) {
    notes.push("⚠ الرابط مختصر — الوجهة مجهولة.");
    score += 2;
  }

  // 4) طول غير طبيعي
  if (url.length > 90) {
    notes.push("⚠ الرابط طويل جدًا — قد يكون تمويه.");
    score += 1;
  }

  // 5) رموز غريبة
  if (/[@#$%^&*]/.test(url)) {
    notes.push("⚠ يحتوي على رموز غير طبيعية في الروابط.");
    score += 1;
  }

  // 6) تقليد موقع مشهور (Domain Spoofing)
  let famous = [
    "google.com",
    "facebook.com",
    "instagram.com",
    "bankofamerica.com",
    "amazon.com",
  ];
  for (let real of famous) {
    let fake1 = real.replace("o", "0");
    let fake2 = real.replace("a", "@");
    let fake3 = "secure-" + real;

    if (
      domain.includes(fake1) ||
      domain.includes(fake2) ||
      domain.includes(fake3)
    ) {
      notes.push("❌ الدومين يُقلِّد موقع مشهور — هذا من أشهر طرق الاحتيال!");
      score += 3;
    }
  }

  // 7) عدد النقاط = مستوى الخطورة
  let level = "";
  let color = "";

  if (score <= 2) {
    level = "✅ الرابط يبدو آمنًا";
    color = "#28a745";
  } else if (score <= 5) {
    level = "⚠ الرابط مشبوه — استخدم بحذر";
    color = "#ff9800";
  } else {
    level = "❌ الرابط خطير جدًا — لا تقم بفتحه";
    color = "#d9534f";
  }

  // النتيجة النهائية
  report.innerHTML = `
        <h3>🔎 تقرير الفحص:</h3>
        ${notes.join("<br>")}
        <br><br>
        <span style="color:${color}; font-size:20px; font-weight:bold;">${level}</span>
        <br>
        <small>درجة الخطورة: ${score}</small>
    `;
}
function toggleTip(boxId) {
  let box = document.getElementById(boxId);
  if (!box) return;
  box.style.display = box.style.display === "block" ? "none" : "block";
}
let scenarios = [
  {
    text: '📩 رسالة تقول:<br><b>"تم إيقاف حسابك، اضغط هنا فورًا"</b>',
    correct: "danger",
    explanation: "❌ تصيد احتيالي: ضغط + رابط.",
  },
  {
    text: "🔐 موقع https معروف بدون طلب بيانات غريبة.",
    correct: "safe",
    explanation: "✅ اتصال آمن ولا يوجد ضغط.",
  },
  {
    text: "📧 بريد يطلب كلمة المرور مباشرة.",
    correct: "danger",
    explanation: "❌ لا جهة رسمية تطلب كلمة السر.",
  },
  {
    text: "📱 تطبيق آلة حاسبة يطلب إذن الكاميرا.",
    correct: "danger",
    explanation: "❌ أذونات غير منطقية.",
  },
  {
    text: "🛍️ متجر إلكتروني معروف وتقييماته عالية.",
    correct: "safe",
    explanation: "✅ موقع موثوق.",
  },
];

let current = 0;
let score = 0;
let answered = false;

function loadScenario() {
  document.getElementById("scenarioText").innerHTML = scenarios[current].text;
  document.getElementById("qNum").innerText = current + 1;
  document.getElementById("activityResult").innerHTML = "";
  answered = false;
  updateProgress();
}

function checkAnswer(choice) {
  if (answered) return;
  answered = true;

  let result = document.getElementById("activityResult");

  if (choice === scenarios[current].correct) {
    score += 10;
    result.innerHTML = `<span style="color:#28a745;">✔ صح 👌</span><br>${scenarios[current].explanation}`;
  } else {
    result.innerHTML = `<span style="color:#d9534f;">❌ غلط</span><br>${scenarios[current].explanation}`;
  }

  document.getElementById("score").innerText = score;
}

function nextScenario() {
  if (!answered) {
    alert("جاوب الأول يا باشا 😄");
    return;
  }

  current++;

  if (current < scenarios.length) {
    loadScenario();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  let msg = "";
  if (score >= 40) {
    msg = "🏆 ممتاز! انت Cyber Defender 🔥";
  } else if (score >= 20) {
    msg = "👍 كويس جدًا، بس ركّز أكتر";
  } else {
    msg = "⚠ محتاج تدريب أكتر";
  }

  document.querySelector("#safeOrDanger .card").innerHTML = `
        <h2 style="text-align:center;">🎉 انتهى النشاط</h2>
        <p style="text-align:center;font-size:18px;">
            ⭐ نتيجتك: <b>${score}</b> من ${scenarios.length * 10}
        </p>
        <p style="text-align:center;font-size:18px;">${msg}</p>
        <div style="text-align:center;margin-top:20px;">
            <button class="btn" onclick="location.reload()">🔄 إعادة اللعب</button>
        </div>
    `;
}

function submitContact(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا 💙");
  e.target.reset();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// الذكاء الاصطناعي للشات بوت
const chatbotResponses = {
  مرحبا: "مرحبًا بك في REMORA Shield Security! كيف يمكنني مساعدتك اليوم؟",
  "السلام عليكم": "وعليكم السلام! كيف يمكنني مساعدتك في مجال الأمن السيبراني؟",
  شكرا: "العفو! أنا هنا لمساعدتك دائمًا. هل لديك أي استفسار آخر؟",
  "ماهو التطبيق":
    "REMORA Shield Security هو تطبيق تعليمي يشرح أساسيات الأمن السيبراني بطريقة سهلة ومبسطة.",
  "ماهي الموديولات":
    "التطبيق يحتوي على 6 موديولات تغطي: المفاهيم الأساسية، التهديدات السيبرانية، حماية الحسابات، أمن الشبكات، أمن البريد الإلكتروني، والوعي السيبراني.",
  "كيف أحمي حسابي":
    "لحماية حسابك: 1. استخدم كلمة مرور قوية 2. فعّل المصادقة الثنائية 3. لا تشارك بياناتك 4. تحديث التطبيقات بانتظام",
  "ماهي الهجمات السيبرانية":
    "الهجمات السيبرانية هي محاولات لاختراق الأنظمة الرقمية بهدف سرقة المعلومات، التخريب، الابتزاز، أو التجسس.",
  "كيف أعرف الرابط الآمن":
    "الرابط الآمن يبدأ بـ HTTPS، لا يحتوي أخطاء إملائية، من مصدر موثوق، ولا يطلب بيانات حساسة فجأة.",
  "ما أهمية الأمن السيبراني":
    "الأمن السيبراني مهم لحماية البيانات الشخصية، منع الاختراق، الحد من الجرائم الإلكترونية، وضمان استخدام آمن للإنترنت.",
  "كيف أتعلم الأمن السيبراني":
    "يمكنك التعلم من خلال: 1. الموديولات في هذا التطبيق 2. منصات مثل Coursera وUdemy 3. قنوات اليوتيوب المتخصصة 4. الكتب والمقالات",
  "ماهي كلمة المرور القوية":
    "كلمة مرور قوية تكون: طويلة (12+ حرف)، تحتوي حروف كبيرة وصغيرة وأرقام ورموز، وغير مرتبطة بمعلومات شخصية.",
  "كيف أحمي هاتفي":
    "لحماية هاتفك: 1. قفل الشاشة 2. تحديث النظام 3. تحميل تطبيقات من مصادر موثوقة 4. مراجعة الصلاحيات 5. استخدام VPN على شبكات عامة",
  "ماهو التصيد الاحتيالي":
    "التصيد الاحتيالي هو أسلوب خداع لسرقة كلمات المرور والبيانات عبر رسائل وروابط وهمية تبدو رسمية.",
  "كيف أحمي أطفالي على الإنترنت":
    "لحماية الأطفال: 1. مراقبة المحتوى 2. تعليمهم المخاطر 3. استخدام الرقابة الأبوية 4. تحديد وقت الاستخدام 5. التواصل المفتوح معهم",
  "ماهي شبكة VPN":
    "VPN هي شبكة افتراضية خاصة تشفر اتصالك بالإنترنت وتخفي عنوان IP لحماية خصوصيتك على الشبكات العامة.",
  "كيف أكتشف الاختراق":
    "علامات الاختراق: نشاط غير معتاد، بطء الجهاز، ظهور تطبيقات غريبة، استهلاك غير طبيعي للبيانات، رسائل غريبة من حسابك.",
};

// Q&A Database
const qaDatabase = [
  {
    q: "ما هو الأمن السيبراني؟",
    a: "الأمن السيبراني هو مجموعة من الإجراءات والتقنيات المستخدمة لحماية الأجهزة والشبكات والبيانات من الهجمات الإلكترونية والمخترقين.",
  },
  {
    q: "ما هي ثالوث الأمن (CIA Triad)؟",
    a: "ثالوث الأمن يتكون من: 1. السرية (Confidentiality) - منع الوصول غير المصرح، 2. النزاهة (Integrity) - الحفاظ على دقة البيانات، 3. التوفرية (Availability) - ضمان الوصول عند الحاجة",
  },
  {
    q: "ما الفرق بين التهديد والهجوم؟",
    a: "التهديد هو احتمالية حدوث حادثة أمنية، بينما الهجوم هو التنفيذ الفعلي لهذا الاختراق من قبل المهاجم.",
  },
  {
    q: "ما هي أنواع المصادقة؟",
    a: "أنواع المصادقة: 1. شيء تعرفه (كلمة مرور)، 2. شيء تملكه (هاتف/بطاقة)، 3. شيء أنت عليه (بصمة إصبع)، 4. المصادقة متعددة العوامل (MFA)",
  },
  {
    q: "ما هي البرمجيات الخبيثة (Malware)؟",
    a: "البرمجيات الخبيثة هي برامج ضارة تهدف إلى إلحاق الضرر أو التحكم بالأجهزة، وتشمل الفيروسات والديدان والحصان الطروادي والفدية.",
  },
  {
    q: "ما هو الفيروس المعلوماتي؟",
    a: "الفيروس هو برنامج ضار ينسخ نفسه ويتطلب تفاعل المستخدم لينتشر، ويمكنه تلف الملفات وسرقة البيانات.",
  },
  {
    q: "ما هي الديدان (Worms)؟",
    a: "الديدان هي برامج ضارة مستقلة تنتشر عبر الشبكات دون الحاجة لتدخل المستخدم، وتستغل ثغرات النظام.",
  },
  {
    q: "ما هو حصان طروادة؟",
    a: "حصان طروادة برنامج يبدو شرعياً لكنه يحتوي على كود ضار، عندما تقوم بتشغيله يفتح باباً خلفياً للمخترقين.",
  },
  {
    q: "ما هي برمجيات الفدية (Ransomware)؟",
    a: "برمجيات الفدية تشفر ملفات الضحية وتطلب دفع فدية لفك التشفير، تسبب خسائر مالية كبيرة للأفراد والشركات.",
  },
  {
    q: "ما هي ثغرات Zero-Day؟",
    a: "ثغرات Zero-Day هي ثغرات أمنية غير معروفة للجمهور ولم يتم إصدار إصلاح لها بعد، يستغلها المخترقون قبل اكتشاف الشركات لها.",
  },
  {
    q: "ما هو التصيد الاحتيالي (Phishing)؟",
    a: "التصيد الاحتيالي هو أسلوب خداع يستخدم رسائل بريد إلكترونية أو رسائل نصية وهمية لسرقة بيانات المستخدم مثل كلمات المرور والبيانات المصرفية.",
  },
  {
    q: "ما هو الحصاد الموجه (Spear Phishing)؟",
    a: "الحصاد الموجه هو نسخة مخصصة من التصيد الاحتيالي حيث يقوم المهاجم بتجميع معلومات شخصية عن الهدف قبل تنفيذ الهجوم.",
  },
  {
    q: "ما هو هندسة اجتماعية؟",
    a: "الهندسة الاجتماعية هي تقنية خداع نفسي تستخدم لجعل الناس يكشفون معلومات سرية أو يقومون بأعمال تضر أمنهم.",
  },
  {
    q: "ما هي هجمات DDoS؟",
    a: "هجمات DDoS ترسل ملايين الطلبات إلى الخادم في نفس الوقت لإيقاف الخدمة عن المستخدمين الشرعيين.",
  },
  {
    q: "ما هو هجوم الوسيط (MITM)؟",
    a: "هجوم MITM يحدث عندما يعترض المهاجم الاتصال بين جهازك والخادم لسرقة البيانات أو تعديلها قبل وصولها.",
  },
  {
    q: "كيف أنشئ كلمة مرور قوية؟",
    a: "كلمة مرور قوية يجب أن تحتوي على: 1. 12 حرف على الأقل، 2. حروف كبيرة وصغيرة، 3. أرقام، 4. رموز خاصة، 5. غير مرتبطة بمعلومات شخصية",
  },
  {
    q: "كم مرة يجب تغيير كلمة المرور؟",
    a: "يُنصح بتغيير كلمة المرور كل 3-6 أشهر، أو فوراً إذا كنت تشك في تسرب بيانات أو اختراق الحساب.",
  },
  {
    q: "ما هي المصادقة الثنائية (2FA)؟",
    a: "المصادقة الثنائية تتطلب عاملين للدخول: كلمة المرور + رمز التحقق من الهاتف/تطبيق، توفر حماية قوية جداً (99.9%).",
  },
  {
    q: "كيف أفعل المصادقة الثنائية؟",
    a: "لتفعيل 2FA: 1. اذهب لإعدادات الأمان، 2. اختر خيار المصادقة الثنائية، 3. استخدم Google Authenticator أو SMS، 4. احفظ رموز النسخ الاحتياطية.",
  },
  {
    q: "ما هو تطبيق Bitwarden؟",
    a: "Bitwarden هو مدير كلمات مرور آمن يشفر ويحفظ كلمات المرورك ويملأها تلقائياً، يوفر حماية قوية للبيانات.",
  },
  {
    q: "ما هي أفضل ممارسات حماية البيانات الشخصية؟",
    a: "أفضل الممارسات: 1. استخدم كلمات مرور قوية، 2. فعّل 2FA، 3. لا تشارك بيانات حساسة، 4. قم بتحديثات منتظمة، 5. استخدم VPN على شبكات عامة",
  },
  {
    q: "ما هو VPN وكيف يحميك؟",
    a: "VPN (شبكة افتراضية خاصة) تشفر اتصالك بالإنترنت وتخفي عنوان IP الحقيقي، تحميك على الشبكات العامة من التجسس.",
  },
  {
    q: "كيف أعرف إذا تم اختراق حسابي؟",
    a: "علامات الاختراق: 1. لا تستطيع تسجيل الدخول، 2. نشاط غريب، 3. رسائل من حسابك لم تشارك فيها، 4. تحذيرات الأمان، 5. تغيير كلمة المرور من تلقاء نفسها",
  },
  {
    q: "ما الفرق بين Hub و Switch و Router؟",
    a: "Hub يوزع البيانات لكل الأجهزة (غير آمن)، Switch يوجه البيانات بذكاء، Router يربط الشبكات ويوفر الحماية والتشفير.",
  },
  {
    q: "ما هو الجدار الناري (Firewall)؟",
    a: "الجدار الناري هو نظام أمني يراقب البيانات الداخلة والخارجة ويحجب الاتصالات المشبوهة والضارة.",
  },
  {
    q: "كيف أحمي شبكة الواي فاي الخاصة بي؟",
    a: "لحماية الواي فاي: 1. غيّر كلمة المرور الافتراضية، 2. استخدم WPA3 أو WPA2، 3. عطّل WPS، 4. حدّث الجهاز بانتظام، 5. راقب الأجهزة المتصلة",
  },
  {
    q: "ما هي بروتوكولات الإنترنت الآمنة؟",
    a: "البروتوكولات الآمنة تشمل: HTTPS (للمواقع)، SFTP (لنقل الملفات)، SSH (للاتصال الآمن)، TLS (للتشفير).",
  },
  {
    q: "ما هي DNS؟",
    a: "DNS (نظام أسماء المجالات) يحول أسماء المواقع (مثل google.com) إلى عناوين IP حتى يستطيع متصفحك الوصول إليها.",
  },
  {
    q: "كيف أتجنب تحميل التطبيقات الضارة؟",
    a: "لتجنب التطبيقات الضارة: 1. حمّل من متاجر رسمية فقط، 2. اقرأ التقييمات والتعليقات، 3. تحقق من المطور، 4. راجع الصلاحيات المطلوبة.",
  },
  {
    q: "ما هي صلاحيات التطبيقات ولماذا مهمة؟",
    a: "صلاحيات التطبيقات تحدد ما يمكن للتطبيق الوصول إليه (كاميرا، موقع، جهات اتصال)، تأكد من عدم طلب صلاحيات غير ضرورية.",
  },
  {
    q: "ما هي نسبة الهجمات التي تبدأ من البريد الإلكتروني؟",
    a: "90% من الهجمات السيبرانية تبدأ من البريد الإلكتروني، 91% من جرائم التصيد الاحتيالي تتم عبر البريد.",
  },
  {
    q: "كيف أعرف البريد الاحتيالي من الشرعي؟",
    a: "البريد الاحتيالي: بريد المرسل غريب، أخطاء إملائية، روابط مريبة، طلب بيانات حساسة. البريد الشرعي: من نطاق رسمي، لغة احترافية، روابط آمنة.",
  },
  {
    q: "ما هو التشفير وكيف يحميك؟",
    a: "التشفير يحول البيانات إلى رموز غير قابلة للقراءة دون مفتاح سري، يضمن عدم قراءة بياناتك حتى لو تم اعتراضها.",
  },
  {
    q: "ما هي أنواع الهندسة الاجتماعية؟",
    a: "أنواع الهندسة الاجتماعية: 1. التصيد الاحتيالي، 2. البصيرة (انتحال الهوية)، 3. المكالمات الهاتفية، 4. الرسائل النصية، 5. الإغراءات والعروض المزيفة",
  },
  {
    q: "كيف أحمي أطفالي على الإنترنت؟",
    a: "لحماية الأطفال: 1. استخدم برامج الرقابة الأبوية، 2. حدّد وقت الاستخدام، 3. اشرح المخاطر، 4. راقب الأنشطة، 5. تواصل معهم عن الأشياء المريبة.",
  },
  {
    q: "ما هي أهمية تحديث النظام والتطبيقات؟",
    a: "التحديثات توفر إصلاحات لثغرات الأمان المكتشفة، تحسن الأداء، وتحمي من الهجمات الجديدة.",
  },
  {
    q: "كم من الاختراقات بسبب الخطأ البشري؟",
    a: "80% من الاختراقات الأمنية تحدث بسبب الخطأ البشري مثل كلمات مرور ضعيفة واستخدام الشبكات العامة بدون حماية.",
  },
  {
    q: "ما هو Hashcat ولماذا خطير؟",
    a: "Hashcat أداة لاختراق كلمات المرور بتجربة ملايين التجميعات، تدعم 300+ خوارزمية تشفير، تُستخدم بشكل غير قانوني لسرقة كلمات المرور.",
  },
  {
    q: "ما هو Wireshark؟",
    a: "Wireshark أداة لتحليل حركة الشبكة وفحص البيانات المنقولة، تُستخدم لتشخيص مشاكل الشبكة وكشف الهجمات.",
  },
  {
    q: "ما هو Metasploit؟",
    a: "Metasploit إطار عمل لاختبار الاختراق يحتوي على 2000+ أداة استغلال للثغرات، يُستخدم في اختبارات الأمان المصرح بها فقط.",
  },
  {
    q: "ما هي OpenVAS؟",
    a: "OpenVAS أداة مفتوحة المصدر لفحص الثغرات الأمنية، تحتوي على 100,000+ فحص للكشف عن المشاكل الأمنية.",
  },
  {
    q: "ما هو Nessus؟",
    a: "Nessus أداة متخصصة لتقييم الثغرات الأمنية، تحتوي على 177,000+ فحص، تقدم تقارير تفصيلية بالمشاكل وطرق حلها.",
  },
  {
    q: "ما هي Kali Linux؟",
    a: "Kali Linux نظام تشغيل مخصص لاختبار الاختراق والأمن السيبراني، يحتوي على 600+ أداة أمنية جاهزة، تُستخدم بشكل قانوني فقط.",
  },
  {
    q: "ما هي أساليب الحماية من البرمجيات الخبيثة؟",
    a: "طرق الحماية: 1. استخدم برنامج مضاد فيروسات قوي، 2. حدّث النظام بانتظام، 3. لا تفتح ملفات من مصادر غير موثوقة، 4. استخدم VPN.",
  },
  {
    q: "كيف أكتشف محاولة اختراق شبكتي؟",
    a: "علامات الاختراق: 1. نشاط شبكة غير معتاد، 2. بطء الإنترنت، 3. رسائل خطأ غريبة، 4. تحذيرات الجدار الناري، 5. أجهزة غريبة متصلة.",
  },
  {
    q: "ما هو الوعي السيبراني؟",
    a: "الوعي السيبراني هو فهم المستخدم للمخاطر الرقمية والممارسات الآمنة، يُعتبر خط الدفاع الأول ضد الهجمات.",
  },
  {
    q: "ما أهمية التثقيف الأمني؟",
    a: "التثقيف الأمني يقلل الأخطاء البشرية، يزيد الوعي بالمخاطر، يحسن السلوك الآمن، ويحمي الأفراد والشركات من الاختراقات.",
  },
];

// Initialize User ID and Chat History
function initializeUserID() {
  let userID = localStorage.getItem("chatbot_user_id");

  if (!userID) {
    // Generate unique ID for new user
    userID =
      "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("chatbot_user_id", userID);
  }

  return userID;
}

// Get or create User ID
let CHATBOT_USER_ID = initializeUserID();

// Chat History Management
function saveChatHistory(messages) {
  localStorage.setItem("chatbot_history", JSON.stringify(messages));
}

function loadChatHistory() {
  const history = localStorage.getItem("chatbot_history");
  return history ? JSON.parse(history) : [];
}

function clearChatHistory() {
  localStorage.removeItem("chatbot_history");
}

function toggleChat() {
  const chatbotWindow = document.getElementById("chatbot-window");
  chatbotWindow.classList.toggle("active");

  // Reset to menu when opening
  if (chatbotWindow.classList.contains("active")) {
    backToMenu();
  }
}

function enterChatbotMode(mode) {
  const menu = document.getElementById("chatbot-menu");
  const qaMode = document.getElementById("chatbot-qa-mode");
  const chatMode = document.getElementById("chatbot-chat-mode");

  menu.style.display = "none";
  qaMode.classList.remove("active");
  chatMode.classList.remove("active");

  if (mode === "qa") {
    qaMode.classList.add("active");
    if (!document.getElementById("qa-container").innerHTML) {
      renderQA();
    }
  } else if (mode === "chat") {
    chatMode.classList.add("active");
    const messagesContainer = document.getElementById("chatbot-messages");

    // Load chat history
    const history = loadChatHistory();
    messagesContainer.innerHTML = "";

    if (history.length === 0) {
      // First time - show welcome message
      addChatMessage(
        "مرحباً بك! أنا روبوت المساعدة الذكي. كيف يمكنني مساعدتك؟",
        "bot",
      );
    } else {
      // Load previous messages
      history.forEach((msg) => {
        addChatMessage(msg.text, msg.sender, msg.isMarkdown);
      });
    }

    document.getElementById("chatbot-input").focus();
  }
}

function backToMenu() {
  const menu = document.getElementById("chatbot-menu");
  const qaMode = document.getElementById("chatbot-qa-mode");
  const chatMode = document.getElementById("chatbot-chat-mode");

  qaMode.classList.remove("active");
  chatMode.classList.remove("active");
  menu.style.display = "flex";
}

function renderQA() {
  const container = document.getElementById("qa-container");
  container.innerHTML = qaDatabase
    .map(
      (item, index) => `
    <div class="qa-item" data-index="${index}">
      <div class="qa-question" onclick="toggleQAAnswerNew(${index})">
        <span class="qa-icon">❓</span>
        <span class="qa-text">${item.q}</span>
        <span class="qa-toggle">▼</span>
      </div>
      <div class="qa-answer" id="qa-answer-${index}">
        ${item.a}
      </div>
    </div>
  `,
    )
    .join("");
}

function toggleQAAnswerNew(index) {
  const item = document.querySelector(`.qa-item[data-index="${index}"]`);
  item.classList.toggle("expanded");
}

function filterQA() {
  const searchTerm = document.getElementById("qa-search").value.toLowerCase();
  const qaItems = document.querySelectorAll(".qa-item");

  qaItems.forEach((item) => {
    const question = item.querySelector(".qa-text").textContent.toLowerCase();
    if (question.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function addChatMessage(text, sender, isMarkdown = false) {
  const messagesContainer = document.getElementById("chatbot-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chatbot-message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${sender}`;

  if (isMarkdown && sender === "bot") {
    // Parse and render markdown for bot messages
    bubble.innerHTML = marked.parse(text);
    bubble.classList.add("markdown-content");
  } else {
    bubble.textContent = text;
  }

  messageDiv.appendChild(bubble);
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Save to chat history
  const history = loadChatHistory();
  history.push({
    text: text,
    sender: sender,
    isMarkdown: isMarkdown,
  });
  saveChatHistory(history);
}

function sendChatMessage() {
  const input = document.getElementById("chatbot-input");
  const text = input.value.trim();

  if (!text) return;

  // Add user message
  addChatMessage(text, "user");
  input.value = "";
  input.disabled = true;

  // Show loading indicator
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "chatbot-message bot";
  loadingDiv.id = "loading-indicator";
  const loadingBubble = document.createElement("div");
  loadingBubble.className = "message-bubble bot loading";
  loadingBubble.innerHTML =
    '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>';
  loadingDiv.appendChild(loadingBubble);
  document.getElementById("chatbot-messages").appendChild(loadingDiv);
  document.getElementById("chatbot-messages").scrollTop =
    document.getElementById("chatbot-messages").scrollHeight;

  // Send to n8n webhook
  sendToN8N(text, input);
}

function sendToN8N(message, inputElement) {
  const webhookURL =
    "https://awesomemanagain2.app.n8n.cloud/webhook/d140614e-e932-4679-8da6-122b4b8ccc6d";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
      id: CHATBOT_USER_ID,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Remove loading indicator
      const loadingIndicator = document.getElementById("loading-indicator");
      if (loadingIndicator) {
        loadingIndicator.remove();
      }

      // Add bot response with markdown support
      const responseMessage =
        data.message || "عذراً، حدث خطأ في الحصول على الرد.";
      addChatMessage(responseMessage, "bot", true);

      inputElement.disabled = false;
      inputElement.focus();
    })
    .catch((error) => {
      console.error("Error:", error);

      // Remove loading indicator
      const loadingIndicator = document.getElementById("loading-indicator");
      if (loadingIndicator) {
        loadingIndicator.remove();
      }

      // Add error message
      addChatMessage(
        "عذراً، فشل الاتصال بخادم الذكاء الاصطناعي. يرجى المحاولة مرة أخرى.",
        "bot",
      );
      inputElement.disabled = false;
      inputElement.focus();
    });
}

function getChatbotResponse(userInput) {
  const input = userInput.toLowerCase();

  // Check for keywords in our database
  for (const [key, value] of Object.entries(chatbotResponses)) {
    if (input.includes(key)) {
      return value;
    }
  }

  // Find similar questions in QA database
  for (const item of qaDatabase) {
    if (
      item.q.toLowerCase().includes(input) ||
      input.includes(item.q.toLowerCase())
    ) {
      return item.a;
    }
  }

  // Default responses
  const defaultResponses = [
    "أنا هنا للمساعدة في أسئلة الأمن السيبراني. يمكنك طرح سؤالك بشكل مباشر أو استخدام قسم الأسئلة والأجوبة.",
    "هل لديك سؤال محدد عن الأمن السيبراني؟ يمكنني مساعدتك بمزيد من التفاصيل.",
    "اعتذر، لم أفهم السؤال بشكل واضح. هل يمكنك إعادة الصيغة؟",
    "هذا سؤال جيد! لكن قد تجد إجابة أفضل في قسم الأسئلة والأجوبة.",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function chatbotResponse() {
  let question = document
    .querySelector("#chatbot-window textarea")
    .value.trim()
    .toLowerCase();
  let response =
    "أنا هنا لمساعدتك في مواضيع الأمن السيبراني. يمكنك سؤالي عن: الموديولات، حماية الحسابات، الهجمات الإلكترونية، نصائح الأمان، وغيرها.";

  // البحث عن أفضل إجابة
  for (let key in chatbotResponses) {
    if (question.includes(key.toLowerCase())) {
      response = chatbotResponses[key];
      break;
    }
  }

  // إذا كان السؤال يحتوي على كلمات محددة
  if (question.includes("كلمة مرور") || question.includes("باسورد")) {
    response = chatbotResponses["ماهي كلمة المرور القوية"];
  } else if (question.includes("هجوم") || question.includes("اختراق")) {
    response = chatbotResponses["ماهي الهجمات السيبرانية"];
  } else if (question.includes("أطفال") || question.includes("طفل")) {
    response = chatbotResponses["كيف أحمي أطفالي على الإنترنت"];
  } else if (question.includes("رابط") || question.includes("موقع")) {
    response = chatbotResponses["كيف أعرف الرابط الآمن"];
  }

  alert("🤖 روبوت المساعدة:\n\n" + response + "\n\nهل تحتاج مساعدة أخرى؟");
  document.querySelector("#chatbot-window textarea").value = "";
}

function updateProgress() {
  let percent = (current / scenarios.length) * 100;
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    progressBar.style.width = percent + "%";
  }

  let completedExams = 0;
  for (let i = 1; i <= 6; i++) {
    if (localStorage.getItem("exam_" + i)) {
      completedExams++;
    }
  }

  const progressPercentage = Math.round((completedExams / 6) * 100);
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  if (progressFill && progressText) {
    progressFill.style.width = progressPercentage + "%";
    progressText.textContent = `لقد أكملت ${progressPercentage}% من التطبيق (${completedExams} من 6 اختبارات)`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadTheme();

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.style.display = "none";
  }

  const savedUsername = localStorage.getItem("savedUsername");
  const rememberMe = localStorage.getItem("rememberMe");
  if (rememberMe === "true" && savedUsername) {
    const usernameInput = document.getElementById("username");
    const rememberCheck = document.getElementById("rememberMe");
    if (usernameInput) usernameInput.value = savedUsername;
    if (rememberCheck) rememberCheck.checked = true;
  }

  const currentUser = localStorage.getItem("username");
  const loginScreen = document.getElementById("loginScreen");
  if (currentUser && loginScreen) {
    loginScreen.style.display = "none";
  }

  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const activeLoginScreen = document.getElementById("loginScreen");
      if (activeLoginScreen && activeLoginScreen.style.display !== "none") {
        checkLogin();
      }
    }
  });

  document.getElementById("qTotal").innerText = scenarios.length;
  loadScenario();

  updateProgress();

  const chatbotTextarea = document.querySelector("#chatbot-window textarea");
  if (chatbotTextarea) {
    chatbotTextarea.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        chatbotResponse();
      }
    });
  }

  document.querySelectorAll(".question-icon").forEach((icon) => {
    icon.removeAttribute("onclick");
    icon.addEventListener("click", () => showQuestion(icon));
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeQuestionModal();
    }
  });

  const videoModal = document.getElementById("videoModal");
  if (videoModal) {
    videoModal.addEventListener("click", function (e) {
      if (e.target.id === "videoModal") {
        this.style.display = "none";
        const video = document.getElementById("module2Video");
        if (video) video.pause();
      }
    });
  }

  const videoModal5 = document.getElementById("videoModal5");
  if (videoModal5) {
    videoModal5.addEventListener("click", function (e) {
      if (e.target.id === "videoModal5") {
        this.style.display = "none";
        const video = document.getElementById("module5Video");
        if (video) video.pause();
      }
    });
  }

  const videoModal3 = document.getElementById("videoModal3");
  if (videoModal3) {
    videoModal3.addEventListener("click", function (e) {
      if (e.target.id === "videoModal3") {
        this.style.display = "none";
        const video = document.getElementById("module3SummaryVideo");
        if (video) video.pause();
      }
    });
  }

  const videoModal6 = document.getElementById("videoModal6");
  if (videoModal6) {
    videoModal6.addEventListener("click", function (e) {
      if (e.target.id === "videoModal6") {
        this.style.display = "none";
        const video = document.getElementById("module6SummaryVideo");
        if (video) video.pause();
      }
    });
  }

  const bulb = document.getElementById("bulb-module1-infographic");
  if (bulb) {
    bulb.addEventListener("mouseenter", function () {
      this.style.filter = "grayscale(0%)";
      this.style.opacity = "1";
      this.style.transform = "scale(1.05)";
    });

    bulb.addEventListener("mouseleave", function () {
      this.style.filter = "grayscale(100%)";
      this.style.opacity = "0.6";
      this.style.transform = "scale(1)";
    });
  }

  document.querySelectorAll(".tool-card").forEach((card) => {
    const bulb = card.querySelector('img[id^="bulb-"]');
    const toolImg = card.querySelector(".tool-img");
    if (!bulb || !toolImg) return;

    bulb.classList.add("tool-inline-lamp");
    if (toolImg.nextElementSibling !== bulb) {
      toolImg.insertAdjacentElement("afterend", bulb);
    }

    const hintId = `${bulb.id.replace("bulb-", "")}-hint`;
    const hint = card.querySelector(`#${hintId}`);
    if (hint) {
      hint.classList.add("tool-hint-popup");
      if (!hint.querySelector(".tool-hint-close")) {
        const closeBtn = document.createElement("button");
        closeBtn.className = "tool-hint-close";
        closeBtn.type = "button";
        closeBtn.innerHTML = "✕";
        closeBtn.onclick = (e) => {
          e.stopPropagation();
          hint.style.display = "none";
          bulb.style.filter = "grayscale(100%)";
          bulb.style.opacity = "0.7";
          bulb.style.transform = "scale(1)";
          bulb.style.boxShadow = "none";
        };
        hint.prepend(closeBtn);
      }
    }

    bulb.addEventListener("click", (e) => e.stopPropagation());
  });

  document.querySelectorAll(".audio-icon").forEach((icon) => {
    icon.removeAttribute("onclick");
    icon.addEventListener("click", function () {
      toggleAudio(this);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".hint-section")) {
      document.querySelectorAll(".hint-content.active").forEach((hint) => {
        hint.classList.remove("active");
      });
    }
  });

  window.addEventListener("scroll", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
});

function logout() {
  localStorage.removeItem("username");
  location.reload();
}
